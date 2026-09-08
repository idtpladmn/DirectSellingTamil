export default async function handler(req, res) {
  // Allow only POST requests for lead submission
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, phone, email } = req.body || {};

    // Validate required fields
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and WhatsApp number are required",
      });
    }

    // Get the secret from Vercel
    const token = process.env.TRYM_API_TOKEN;

    if (!token) {
      console.error("TRYM_API_TOKEN is missing");

      return res.status(500).json({
        success: false,
        message: "CRM configuration is missing",
      });
    }

    // Send lead to TRYM / LeadConnector
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          ...(email ? { email: email.trim() } : {}),
          locationId: "QHabMYzvY0fxpgUgyxDp",
          source: "SKT Landing Page",
          tags: ["skt-landing-page"],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("TRYM API error:", data);

      return res.status(response.status).json({
        success: false,
        message: "Unable to create lead in CRM",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lead created successfully",
      contact: data.contact || data,
    });
  } catch (error) {
    console.error("Lead API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
