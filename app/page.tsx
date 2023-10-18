import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <div className="flex justify-center m-5">
        <Image src="/optima1.jpg" alt="Optima 1" width={500} height={50} />
      </div>
    </main>
  );
}
