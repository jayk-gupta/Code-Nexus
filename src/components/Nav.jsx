
import { GiLightBulb } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'

// 
export const Nav = () => {
  return (
    <div className=" sm:w-full   bg-purple-200 py-2 flex justify-between">
      <div className="flex gap-6 px-4 items-center font-serif tracking-[2px]">
        <GiLightBulb className="text-3xl text-purple-800 bg-white rounded-full p-[0.2rem]" />
        <a href="https://the-code-nexus.vercel.app/">
          <h3 className="text-3xl drop-shadow-3xl text-purple-800 hover:text-purple-950">
            Code Nexus
          </h3>
        </a>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/jayk-gupta/Code-Nexus">
          <BsGithub className="text-3xl mx-4 text-purple-900 " />
        </a>
      </div>
    </div>
  );
}

export default Nav;
