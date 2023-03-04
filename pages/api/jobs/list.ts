export default function handler(req, res) {
  res.json({ data: { jobs: [{ title: 'first job'}, { title: 'second job'}]}})
}