export default function jobDetail({params}) {
  const job = params.slug[0]
  return <h2>Job Detail: {job}</h2>
}