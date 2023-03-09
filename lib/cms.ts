const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, time)
  })
}
export default async function getJobs() {
  await delay(2000)
  const data = await fetch(
    "https://job-board-34db1-default-rtdb.firebaseio.com/.json"
  );
  const jobs = await data.json();
  // res.json(jobs)
  return jobs;
}
