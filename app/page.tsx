import Image from "next/image";
import Header from "./_components/(home)/header";
import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 py-32">
      <Header />

      <article className="flex flex-row gap-x-2">
        <Image
          src={require("../app/(assets)/images/IMG_9034.png")}
          alt="Joshua Rashtian"
          width={400}
          className=" "
          height={220}
        />
        <Image
          src={require("../app/(assets)/images/IMG_9034.png")}
          alt="Joshua Rashtian"
          width={400}
          height={220}
        />
      </article>
      <section className="flex h-64 w-full flex-col justify-between rounded-3xl">
        <ul>
          <h1 className="text-6xl font-black">Joshua Rashtian.</h1>
          <h3 className="text-3xl font-light dark:text-slate-300">
            a nerdy and fun developer, creative.
          </h3>
        </ul>
        <button className="w-fit rounded-2xl border-2 border-dashed p-4 transition-all ease-out hover:scale-105">
          <h4 className="text-2xl">
            Learn More About Me <IoArrowForward />
          </h4>
        </button>
      </section>
    </main>
  );
}
