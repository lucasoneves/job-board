import getJobs from "@/lib/cms";
import JobItem from "@/components/JobItem";
import Head from "next/head";

export default async function Jobs() {
  const data = await getJobs();
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <h2 className="pageTitle">Seus jobs cadastrados:</h2>
      {data.map((job, index) => (
        <JobItem
          key={index}
          company={job.company}
          title={job.title}
          date={job.date}
          image={job.image}
          status={job.status}
        />
      ))}
    </div>
  );
}

export function getStaticParams(param) {
  return param;
}
