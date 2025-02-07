import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await axios.get("https://auto.dev/api/listings", {
      params: { apikey: "LOGIN_FOR_FREE_API_KEY" }, // Using the key directly for now
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Ensure the response structure is as expected
    if (!response.data || !response.data.records) {
      throw new Error("Invalid response structure from Auto.dev API");
    }

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("API Error Details:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    return res.status(error.response?.status || 500).json({
      error: "Failed to fetch vehicles",
      details: error.message,
    });
  }
}
