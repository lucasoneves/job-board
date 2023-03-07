const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

const getData = async (slug) => {
  const job = await delay(5000);
  return {slug};
};

export default async function JobDetail({ params }) {
  const { slug } = params;
  const job = await getData(slug);

  // throw new Error('erro')
  return (
    <>
      <h2>{job.slug}</h2>
    </>
  );
}
