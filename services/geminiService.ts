import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Assume process.env.API_KEY is available in the execution environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
const model = 'gemini-2.5-flash';

export const generateAboutSection = async (rawNotes: string): Promise<string> => {
  try {
    const prompt = `You are an expert copywriter and career coach for the tech industry. A developer has provided their raw notes about their skills, experience, and passion for technology. Your task is to transform these notes into a compelling and professional 'About Me' section for their portfolio website.

The tone should be:
- Confident but approachable
- Professional and skilled
- Passionate about technology and problem-solving

The output should:
- Be formatted as clean markdown (paragraphs, bold text for emphasis).
- Avoid headings.
- Flow smoothly as a personal narrative.
- Highlight key technical skills and soft skills based on their notes.

Here are the developer's notes:
---
${rawNotes}
---`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    // FIX: Access the 'text' property directly from the response object.
    return response.text;
  } catch (error) {
    console.error("Error generating about section:", error);
    return "I'm sorry, an error occurred while generating the content. Please check the console for details and try again later.";
  }
};

interface ContactDetails {
    name: string;
    email: string;
    message: string;
}

export const generateContactReply = async ({ name, email, message }: ContactDetails): Promise<string> => {
    try {
        const prompt = `You are a friendly AI assistant for a tech professional's portfolio website. A visitor named ${name} has just sent a message. Your task is to generate a warm, professional, and slightly personalized confirmation message. Acknowledge their message and assure them that the owner of the portfolio will get back to them soon. Here is their message:
---
${message}
---`;
        const response: GenerateContentResponse = await ai.models.generateContent({
          model,
          contents: prompt,
        });
        // FIX: Access the 'text' property directly from the response object.
        return response.text;
    } catch (error) {
        console.error("Error generating contact reply:", error);
        return `Thank you for your message, ${name}! I'll get back to you as soon as possible. (Error in AI generation)`;
    }
};
