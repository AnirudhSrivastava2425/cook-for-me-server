require('dotenv').config();
const Groq = require('groq-sdk');

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function generateRecipe(userInput) {
  const systemPrompt = `You are an expert chef AI assistant. 
When given a prompt for ingredients or dietary preference, generate a detailed recipe.
Always respond with ONLY valid JSON in this exact format, no extra text:
{
  "title": "Recipe name",
  "ingredients": ["ingredient 1 with quantity", "ingredient 2 with quantity"],
  "steps": ["Step 1 instruction", "Step 2 instruction"],
  "nutrition": {
    "calories": 350,
    "protein": "25g",
    "carbs": "40g",
    "fat": "12g"
  },
  "dietaryTags": ["vegetarian"]
}`;

  const response = await client.chat.completions.create({
    model: 'llama-3.1-8b-instant', // free model on Groq
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `${userInput}` }
    ],
    temperature: 0.7
  });

  const raw = response.choices[0].message.content;
  return JSON.parse(raw);
}

module.exports = { generateRecipe };