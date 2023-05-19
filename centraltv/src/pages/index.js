import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Алдаа!</title>
      </Head>
      <div className="w-full h-screen bg-red-500"></div>
    </>
  );
}
