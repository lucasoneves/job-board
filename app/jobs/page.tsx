
async function getData() {
  const data = await fetch('http://reddit.com/.json')
  return data.json()
}

export default async function Jobs() {
  const data = await getData()
  const post = data.data.children[0].data.title
  return (
    <div>
      <h2>Jobs</h2>
      <h3>{post}</h3>
    </div>
  );
}
