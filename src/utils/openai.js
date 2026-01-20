export async function askAI(question, resumeData) {
  const prompt = `
Answer using ONLY this portfolio data.
If info not present, say: "That information is not mentioned."

Name: ${resumeData.name}
Role: ${resumeData.role}

Projects:
${resumeData.projects.map(p => `- ${p.name}: ${p.description}`).join("\n")}

Question:
${question}
`

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    }),
  })

  const data = await res.json()
  return data.choices?.[0]?.message?.content
}
