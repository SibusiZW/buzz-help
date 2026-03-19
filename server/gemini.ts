'use server';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })


export default async function generateResponse(prompt: string) {
    if (prompt.trim() === "") return "Please enter prompt!";

    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Please generate a study plan for me using this info: \n${prompt}\n`,
        config: {
            systemInstruction: "You are a professional study plan drafter. You should be given the previous test scores, weak subjects and time left for exams for a student. Then draft the student a study plan"
        }
    })

    return response.text
}