'use client';
import { useState } from 'react';



type ButtonName = 'home' | 'projects' | 'skills' | 'contact'; // Define allowed button names

export default function Navbar() {
  const [activeButton, setActiveButton] = useState<ButtonName | null>(null); // Track which button is active

  const handleClick = (buttonName: ButtonName) => {
    setActiveButton(buttonName); // Set the active button
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-50/70 backdrop-blur-md text-black p-4 rounded-full w-[500px] h-[60px] flex justify-around items-center text-lg z-50 shadow-lg border-2 border-gray-200">
      <button
        onClick={() => handleClick('home')}
        className={`w-[80px] h-[40px] rounded-full ${activeButton === 'home' ? 'bg-gray-200' : 'bg-gray-50/0'} text-black`}
      >
        Home
      </button>
      <button
        onClick={() => handleClick('projects')}
        className={`w-[80px] h-[40px] rounded-full ${activeButton === 'projects' ? 'bg-gray-200' : 'bg-gray-50/0'} text-black`}
      >
        Projects
      </button>
      <button
        onClick={() => handleClick('skills')}
        className={`w-[80px] h-[40px] rounded-full ${activeButton === 'skills' ? 'bg-gray-200' : 'bg-gray-50/0'} text-black`}
      >
        Skills
      </button>
      <button
        onClick={() => handleClick('contact')}
        className={`w-[80px] h-[40px] rounded-full ${activeButton === 'contact' ? 'bg-gray-200' : 'bg-gray-50/0'} text-black`}
      >
        Contact
      </button>
    </nav>
  );
}
