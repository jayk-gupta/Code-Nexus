
import { GiLightBulb } from 'react-icons/gi'
import { BsGithub } from 'react-icons/bs'

// 
export const Nav = () => {
  return (
    <div className="bg-purple-200 py-2 flex justify-between">
      <div className="flex gap-6 px-4 items-center font-serif tracking-[2px]">
        <GiLightBulb className="text-3xl text-purple-800 bg-white rounded-full p-[0.2rem]" />
        <h3 className="text-3xl drop-shadow-3xl">Code Nexus</h3>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/jayk-gupta/Code-Nexus">
          <BsGithub className="text-3xl mx-4 text-purple-900 hover:text-purple-600" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
