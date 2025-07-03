import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("the promt:", prompt);

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // const response = await openai.images.generate({
    //   model: "dall-e-3",
    //   prompt,
    //   n: 1,
    //   size: "1024x1024", // Correct size values supported by OpenAI
    // });

    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: prompt,
        size: "512x512",
    });


    console.log("url: ",response.data[0].url)

    res.json({ url: response.data[0].url });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
