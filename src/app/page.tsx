import { Metadata } from "next";
import { auth } from "./auth";
import Navbar from "./components/Navbar";
import QuizButton from "./components/QuizButton";
import Image from "next/legacy/image";

export const metadata: Metadata = {
  title: "FED.",
};

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col bg-[#F1FFE7] text-[#6C464E] min-h-screen min-w-screen">
      <Navbar />

      <main className="grid grid-cols-3 w-screen h-screen pt-20">
        <div className="flex justify-center items-center">
          <div className="w-[70%] gap-8 flex flex-col">
            <p className="text-8xl font-bold tracking-wider">
              FindED
              <span className="text-blue-300">.</span>
            </p>
            <p className="text-xl">
              Wyszukiwarka zajęć dla dzieci w różnym wieku. Pomożemy Ci znaleźć
              zajęcia dla Twojego dziecka w Twojej okolicy!
            </p>
            <QuizButton />
          </div>
        </div>
        <div className="col-span-2 w-full h-full flex ">
          <div className="relative h-full w-[30%]">
            <Image
              src={"/football.jpg"}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative h-full w-[40%]">
            <Image src={"/chess.jpg"} layout="fill" className="object-cover" />
          </div>
          <div className="relative h-full w-[30%]">
            <Image src={"/karate.jpg"} layout="fill" className="object-cover" />
          </div>
        </div>
      </main>
      <p className="text-3xl">{session?.user?.id}</p>
    </div>
  );
}
