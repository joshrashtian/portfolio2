import Image from "next/image";
import Header from "./_components/(home)/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <section className="h-32 w-full rounded-3xl">
        <h1 className="text-6xl font-black">Joshua Rashtian.</h1>
        <h3 className="text-3xl font-light dark:text-slate-300">
          Developer. Creative. Builder.
        </h3>
      </section>
    </main>
  );
}
