import { Metadata } from "next";
import { auth } from "./auth";
import SignIn from "./components/SignIn";

export const metadata: Metadata = {
  title: "Landing Page",
};

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col">
      <p className="text-7xl">HELLO</p>
      <SignIn />
      <p className="text-3xl">{session?.user?.id}</p>
    </div>
  );
}
