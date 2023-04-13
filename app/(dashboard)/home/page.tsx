import Greetings from "@/components/Greetings";
import GreetingSkeleton from "@/components/GreetingSkeleton";
import { getUserFromCookie } from "@/lib/auth";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import Link from "next/link";
import Loading from "@/components/Loading";
const getData = async () => {
  const user = await getUserFromCookie(cookies());

  const projects = await db.project.findMany({
    where: {
      ownerId: user.id,
    },
    include: {
      tasks: true,
    },
  });

  console.log(projects);

  return { projects };
};

export default async function Home() {
  const { projects } = await getData();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Greetings />
      </Suspense>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h2>Projects:</h2>
            <div key={project.id}>
              {project.name} <Link href={`/project/${project.id}`}></Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
