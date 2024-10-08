import { BentoGrid } from "@/components/bento/grid";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-screen h-screen items-center justify-center sm:px-20 px-4 py-4">
        <BentoGrid className="max-w-full h-full sm:h-auto sm:w-[68rem] sm:aspect-video aspect-reels" />
      </div>
    </>
  );
}
