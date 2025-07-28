import clogo from "@/icons/clogo.png";
import pythonlogo from "@/icons/pythonlogo.png";
import githublogo from "@/icons/githublogo.svg";
import gitlogo from "@/icons/Git_icon.svg.png";
import fusionlogo from "@/icons/Fusion360.png";
import linkedinlogo from "@/icons/linkedin.webp";

import Image from "next/image";
import { JSX } from 'react';

const logo_height = 30; // height in pixels as a number


const skillImages: { [key: string]: JSX.Element } = {
  C: <img src={clogo.src} alt="C Logo" style={{ height: logo_height, width: 'auto' }} />,
  Python: <img src={pythonlogo.src} alt="Python Logo" style={{ height: logo_height, width: 'auto' }} />,
  Github: <img src={githublogo.src} alt="Github Logo" style={{ height: logo_height, width: 'auto' }} />,
  Git: <img src={gitlogo.src} alt="Git Logo" style={{ height: logo_height, width: 'auto' }} />,
  Fusion: <img src={fusionlogo.src} alt="Fusion Logo" style={{ height: logo_height, width: 'auto' }} />,
  Linkedin: <img src={linkedinlogo.src} alt="Linkedin Logo" style={{ height: logo_height, width: 'auto' }} />,
};  

export default function Skill_set({
  skills,
}: {
  skills: string[];
}) {
  return (
    <div className="justify-center items-center border-2 border-amber-300 flex p-0 gap-2 flex-shrink">
      {skills.map((str, index) => (
        <div className="border border-black flex items-center justify-center mx-[5px]" key={str}>

            {skillImages[str]}
            
        </div>
      ))}

    </div>
  );
}
