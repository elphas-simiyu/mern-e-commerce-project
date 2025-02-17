 
import axios from "axios";

const MPESA_API_URL = "https://sandbox.safaricom.co.ke/mpesa";

export const mpesaApi = axios.create({
  baseURL: MPESA_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMpesaToken = async () => {
  return await mpesaApi.post("/oauth/v1/generate?grant_type=client_credentials", {}, {
    auth: {
      username: process.env.MPESA_CONSUMER_KEY,
      password: process.env.MPESA_CONSUMER_SECRET,
    },
  });
};

export const stkPushPayment = async (paymentData) => {
  const tokenResponse = await getMpesaToken();
  const accessToken = tokenResponse.data.access_token;

  return await mpesaApi.post("/stkpush/v1/processrequest", paymentData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
