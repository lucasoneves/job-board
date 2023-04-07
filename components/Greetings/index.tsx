/* eslint-disable react/no-unescaped-entities */
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
// import Button from "./Button";
// import Card from "./Card";
import { delay } from "@/lib/async";

const getData = async () => {
  await delay(5000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async () => {
  const user = await getData();

  return (
    <div className="mb-4">
      <h1 className="text-3xl text-gray-700 font-bold mb-4">
        Hello, {user.firstName}!
      </h1>
      <h4 className="text-xl text-gray-400">
        Check your daily tasks and schedule
      </h4>
      <div>
        <button>Today's Schedule</button>
      </div>
    </div>
  );
};

export default Greetings;
