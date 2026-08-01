import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "20mb" }));

// Initialize Google GenAI
const getGenAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is missing from environment variables.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API: Healthcheck
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Visa Passport Services Portfolio API" });
});

// API: AI Visa Consultant Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, userContext } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    const ai = getGenAI();

    const systemInstruction = `
You are the official AI Travel & Visa Assistant for "Visa Passport Services (VPS)", founded and led by Mr. Ranabir Sarkar (Proprietor & Visa Consultant with 10+ years of expertise based in Kolkata, India).
Your role is to assist prospective travelers, students, professionals, and families with clear, concise, accurate, and professional advice regarding:
1. Tourist, Business, Student, Work Permit, eVisa, Permanent Residency (PR) requirements for US, UK, Schengen, Canada, Australia, Gulf countries, Japan, Singapore, etc.
2. Fresh Passport Applications, Renewals, Police Clearance Certificates (PCC), address changes, and Regional Passport Office (RPO) protocols.
3. Document Legalization & Attestation (HRD/GAD, MEA Apostille, Embassy Legalization).
4. FRRO Foreigner Registration, Visa Extensions, and Exit Permits in India.
5. Travel Insurance, Flight & Hotel Bookings, and FOREX assistance provided by VPS.

Key Information about VPS:
- Address: 127C James Long Sarani, Kolkata - 700008 (Opp. Samar Roychowdhury Sishu Uddyan).
- Contact Phone: +91 33 4001 7655 | Mobile/Voice: +91 9830741022.
- Email: vpsinfohelp@gmail.com | Website: https://www.vpsglobal.in/
- Proprietor: Mr. Ranabir Sarkar.
- Rating: 5.0 Stars across Google Reviews & Justdial with 1000+ satisfied clients.

Guidance Guidelines:
- Keep responses friendly, helpful, structured with bullet points where appropriate, and reassuring.
- When relevant, encourage users to contact Mr. Ranabir Sarkar directly via phone/WhatsApp (+91 9830741022) or visit the Kolkata office for personalized doorstep assistance.
`;

    // Construct conversation history for chat
    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize, but I was unable to process your request at this moment. Please contact VPS directly at +91 9830741022.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({
      error: error.message || "An error occurred while communicating with the AI consultant.",
    });
  }
});

// API: Document Analysis (Scan passport, visa application form, or supporting docs)
app.post("/api/analyze-document", async (req, res) => {
  try {
    const { imageBase64, mimeType, documentType } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: "Missing image payload" });
    }

    const ai = getGenAI();

    const prompt = `
Analyze this travel document photo/scan provided by a client for Visa Passport Services (VPS).
Document category specified by client: ${documentType || "Travel Document / Passport / Visa / Legal Certificate"}.

Provide a structured, professional evaluation containing:
1. **Document Identification**: What type of document is this (e.g., Passport page, Visa sticker, Educational Certificate, Bank Statement, PCC, etc.)?
2. **Quality & Clarity Assessment**: Is the image clear, fully legible, un-cropped, without glare or blur?
3. **Key Information Extracted**: (If legible) Extract non-sensitive document summary (e.g. Issuing country/authority, document validities, name match check, etc.).
4. **Visa/Attestation Readiness & Checklist**: What next steps or attestation/apostille/verification steps are required for this document according to standard consular guidelines?
5. **VPS Expert Advice**: A friendly summary note on how Mr. Ranabir Sarkar & VPS can assist in processing or attesting this document.
`;

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType || "image/jpeg",
              data: cleanBase64,
            },
          },
          { text: prompt },
        ],
      },
    });

    const analysis = response.text || "Document analysis completed.";
    res.json({ analysis });
  } catch (error: any) {
    console.error("Error in /api/analyze-document:", error);
    res.status(500).json({
      error: error.message || "Failed to analyze document image.",
    });
  }
});

// Vite Middleware & Production Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
