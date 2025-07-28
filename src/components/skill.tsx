
import clogo from "@/icons/clogo.png";
import pythonlogo from "@/icons/pythonlogo.png";
import Image from "next/image";
import Skill_set from '@/components/skill_set';
import { JSX } from 'react';


export default function Skill({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <div className="w-[350px] h-[200px] rounded-2xl bg-gray-100 border-2 border-black mt-[50px] p-4 flex flex-col mx-4">
      <div className= "flex items-center justify-center border border-black text-5xl">
        <h1 className="text-black text-2xl border-2 border-black ">{title}</h1>
        <Skill_set skills={skills} />  
      </div>

      <p className="text-black text-lg">{description}</p>

    </div>
  );
}