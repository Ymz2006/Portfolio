import Skill_set from '@/components/skill_set'; 
import Image, { StaticImageData } from "next/image";

export default function Project({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: StaticImageData;
}) {
  return (
      <div className="w-[900px] h-[500px] rounded-xl bg-gray-100 border-2 border-black mt-[50px] flex justify-between pt-[0px]">

        <div className='h-full flex w-[425px] border-2 border-blue-700 items-end'>
            <div className= 'h-[430px] w-[410px] border-2 border-green-700 flex-col'>
                <h1 className="text-black text-2xl ml-[40px]">{title}</h1>
                <div className="ml-[40px] flex flex-row items-center">
                    <h2 className='text-gray-500 font-bold'>Made With:</h2>
                    <div className='ml-[20px]'>
                        <Skill_set skills={["Python", "C"]} />
                    </div>
                    
                </div>
                <p className="text-black text-l ml-[40px]">{description}</p>
            </div>
        </div>


        <div className='h-full flex w-full border-2 border-blue-700 items-end p-0 justify-end'>
            <div className = "relative w-full h-[430px] border-yellow-700 border-2 overflow-hidden m-0 p-0 flex items-end justify-end">
                <Image
                src={img}
                alt="Project Image"
                className="rounded-tl-xl rounded-br-xl m-0 p-0"
                style={{ objectFit: "cover" }}
                />  
            </div>
        </div>


      </div>

  );
}
