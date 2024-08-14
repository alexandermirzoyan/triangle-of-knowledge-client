import Image from "next/image";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between">
    <div>
      <p className="font-normal">Welcome to TFK , Sign up</p>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/triangle.svg"
        alt="Next.js Logo"
        width={54}
        height={48}
        priority
      />
    </div>
  </main>
);

export default Home;
