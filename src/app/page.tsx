import Image from "next/image";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between bg-grey-900">
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </main>
);

export default Home;
