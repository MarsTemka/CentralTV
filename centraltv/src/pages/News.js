import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Imagetv from "../../Components/news";
import Reuters from "../../Components/reuters";

const inter = Inter({ subsets: ["latin"] });

export default function News() {
  return (
    <>
      <Head>
        <title>Мэдээ</title>
      </Head>
      <div className="w-full h-screen">
        <Imagetv />
        <Reuters />
      </div>
    </>
  );
}
