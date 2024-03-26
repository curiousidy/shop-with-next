import { titleFont } from "@/config/font";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Hola mundito</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola mundo</h1>
    </div>
  );
}
