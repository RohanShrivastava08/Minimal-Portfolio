export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY

  // TEMP: allow GET for testing
  if (req.method === "GET") {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: "Say hello in one short sentence." }],
            },
          ],
        }),
      }
    )

    const data = await response.json()
    return res.status(200).json(data)
  }

  // keep POST for later
  return res.status(405).json({ error: "Method not allowed" })
}
