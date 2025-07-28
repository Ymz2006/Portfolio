import Skill_set from "./skill_set";

export default function LinkedInButton({ link, text }: { link: string; text: string }) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="w-[140px] bg-gray-100 text-black font-bold rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 border-2 border-black px-[5px]">
            <div className='ml-[5px]'>{text}</div>
          <Skill_set skills={["Linkedin"]} />
        </button>
      </a>
    );
  }
  