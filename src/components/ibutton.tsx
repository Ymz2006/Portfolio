import Skill_set from "@/components/skill_set";
import GithubBanner from "@/icons/githubbanner.png";

export default function GithubButton({ link, text }: { link: string; text: string }) {
  return (

    <div className="height-[40px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="w-[140px] bg-gray-100 text-black font-bold rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 border-2 border-black px-[5px]">
            <h1 className="ml-[5px]">GitHub</h1>
            <Skill_set skills={["Github"]} />
        </button>
        </a>
    </div>

  );
}



