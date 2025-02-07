// // pages/api/listings.ts
// export default async function handler(req, res) {
//   // Only allow GET requests
//   if (req.method !== "GET") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const response = await fetch(
//       "https://auto.dev/api/listings?apikey=LOGIN_FOR_FREE_API_KEY",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`API Error: ${response.status} - ${errorText}`);
//     }

//     const data = await response.json();

//     // Validate the response data
//     if (!data || !data.records) {
//       throw new Error("Invalid data format received from external API");
//     }

//     // Set CORS headers
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//     return res.status(200).json(data);
//   } catch (error) {
//     console.error("API Route Error:", error);
//     return res.status(500).json({
//       error: "Failed to fetch listings",
//       details: error.message,
//     });
//   }
// }




// pages/api/listings.ts
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://auto.dev/api/listings?apikey=LOGIN_FOR_FREE_API_KEY", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return res.status(200).json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return res.status(500).json({
      error: "Failed to fetch listings",
      details: error.message,
    });
  }
}

