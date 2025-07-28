import Navbar from '@/components/navbar'; // Make sure path is correct
import Project from '@/components/project'; // Make sure path is correct
import Arrow from '@/components/arrow'; // Make sure path is correct
import Skill from '@/components/skill'; // Make sure path is correct
import GithubButton from '@/components/ibutton';
import LinkedInButton  from '@/components/ibutton1';

import clogo from '@/icons/clogo.png'; // Make sure path is correct
import neuralnetwork2 from '@/projectpictures/nn2.png'; // Make sure path is correct
import mecanum from '@/projectpictures/mecanumwheel.png'; // Make sure path is correct
import roboticarm from '@/projectpictures/arm.jpeg'; // Make sure path is correct
import regression from '@/projectpictures/regression.png'; // Make sure path is correct
import sunnyview from '@/projectpictures/sunnyview.png'; // Make sure path is correct


import Skill_set from '@/components/skill_set';
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50 font-nunito font-semibold ">
        <div className="flex items-center justify-center h-[700px] w-full border-2 border-black bg-gray-900 text-black p-4">
          <div className="flex flex-col items-center justify-center  text-gray-50 text-7xl text-center">
          <h1>Hello, I am Jeffrey</h1>
          <h1 className = "text-5xl mt-[20px]">I am studying CS + Math at Purdue University</h1>

          </div>
        </div>

        <Arrow />

        <h1 className="text-black text-4xl mt-[50px]"> Projects</h1>
        <Project title="Project 1" description="This is a description of project 1" img = {roboticarm}/>
        <Project title="Project 2" description="This is a description of project 2" img = {neuralnetwork2} />
        <Project title="Project 3" description="This is a description of project 3" img = {regression}/>
        <Project title="Project 4" description="This is a description of project 4" img = {mecanum}/>
        <Project title="Project 5" description="This is a description of project 5" img = {sunnyview}/>
        
        <Arrow />

        <h1 className="text-black text-4xl mt-[50px]"> Skills</h1>

        <div className="flex flex-wrap  items-center justify-around w-[1000px] border-2 border-black p-0" >
          <Skill title="Machine Learning" description="This is a description of skill 1" skills={["Python", "C"]} />
          <Skill title="Unity" description="This is a description of skill 1" skills={["Python", "C"]} />
          <Skill title="ROS2" description="This is a description of skill 1" skills={["Python", "C"]} />
          <Skill title="3D Modelling" description="This is a description of skill 1" skills={["Python", "C"]} />
          <Skill title="Backend" description="This is a description of skill 1" skills={["Python", "C"]} />
          <Skill title="Frontend" description="This is a description of skill 1" skills={["Python", "C"]} />
        </div>

        <Arrow />

        <h1 className="text-black text-4xl mt-[50px]"> Contact</h1>
        <div className="flex flex-col items-center justify-center w-[900px] h-[300px] border-2 border-black bg text-black p-4 mb-[100px] pt-[50px]">
          <div className= "">
            <h1 className="text-lg">
              My university email:{" "}
              <a href="mailto:zhou1530@purdue.edu" className="text-blue-600 underline hover:text-blue-800">
                zhou1530@purdue.edu
              </a>
            </h1>
          </div>

          <div className= "mt-[10px]">
            <h1 className="text-lg">
              My personal email:{" "}
              <a href="mailto:jeffreyzhou123@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                jeffreyzhou123@gmail.com
              </a>
            </h1>
          </div>


          <div className='flex items-center h-[50px] border-2 border-amber-300 mt-[50px] mb-[20px] w-[300px] justify-around'>
            <GithubButton link="google.com" text="Github" />
            <LinkedInButton link="google.com" text="LinkedIn" />
          </div>

        </div>


      </main> 
    </>
  );  
}
