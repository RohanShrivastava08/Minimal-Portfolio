export default function handler(req, res) {
  return res.status(200).json({
    answer: "API FUNCTION IS RUNNING ON VERCEL",
  })
}
