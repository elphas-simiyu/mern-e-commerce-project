import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const MPESA_BASE_URL = "https://sandbox.safaricom.co.ke/mpesa";

const getAccessToken = async () => {
  try {
    const response = await axios.get(
      `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        auth: {
          username: process.env.MPESA_CONSUMER_KEY,
          password: process.env.MPESA_CONSUMER_SECRET,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("M-Pesa Token Error:", error);
    throw new Error("Failed to obtain M-Pesa access token");
  }
};

const initiateSTKPush = async (phone, amount) => {
  try {
    const token = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "");
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");

    const response = await axios.post(
      `${MPESA_BASE_URL}/stkpush/v1/processrequest`,
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: "GoGoods Payment",
        TransactionDesc: "Payment for GoGoods Order",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("M-Pesa STK Push Error:", error);
    throw new Error("Failed to initiate STK Push");
  }
};

export { getAccessToken, initiateSTKPush };

