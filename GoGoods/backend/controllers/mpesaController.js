 
import axios from "axios";
import dotenv from "dotenv";
import Order from "../models/Order.js";

dotenv.config();

const getAccessToken = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: process.env.MPESA_AUTH_URL,
      auth: {
        username: process.env.MPESA_CONSUMER_KEY,
        password: process.env.MPESA_CONSUMER_SECRET,
      },
    });
    return response.data.access_token;
  } catch (error) {
    throw new Error("Failed to obtain M-Pesa access token");
  }
};

const stkPush = async (req, res) => {
  try {
    const { phone, amount, orderId } = req.body;
    const accessToken = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "");
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");
    
    const response = await axios({
      method: "POST",
      url: process.env.MPESA_STK_PUSH_URL,
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: "GoGoods Order",
        TransactionDesc: "Payment for Order",
      },
    });
    
    await Order.findByIdAndUpdate(orderId, { paymentStatus: "Pending" });
    res.json({ message: "STK Push initiated", response: response.data });
  } catch (error) {
    res.status(500).json({ message: "Payment initiation failed", error });
  }
};

const mpesaCallback = async (req, res) => {
  try {
    const { Body } = req.body;
    const callbackData = Body.stkCallback;
    
    if (callbackData.ResultCode === 0) {
      const orderId = callbackData.CallbackMetadata.Item.find(
        (item) => item.Name === "OrderId"
      ).Value;
      await Order.findByIdAndUpdate(orderId, { paymentStatus: "Completed" });
    }
    
    res.json({ message: "Callback received", data: callbackData });
  } catch (error) {
    res.status(500).json({ message: "Callback processing failed", error });
  }
};

export { stkPush, mpesaCallback };
