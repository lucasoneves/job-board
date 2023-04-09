import Greetings from "@/components/Greetings";
import GreetingSkeleton from "@/components/GreetingSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<GreetingSkeleton />}>
      <Greetings />
    </Suspense>
  );
}
