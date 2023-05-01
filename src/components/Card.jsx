import { BiGitRepoForked } from "react-icons/bi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import data from "../database/data.json";

export default function Card() {
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className="mx-auto bg-[#8800ff]  w-5/6 flex-col flex p-6 rounded-lg shadow-2xl text-white relative md:hover:shadow-3xl mb-12 md:w-11/12 md:flex-row  md:gap-24  md:p-12"
          >
            {/* image */}
            <a href={item.link}>
              <div className="h-[6rem] w-[10rem] md:h-[12rem] md:w-[20rem]">
                <img
                  className="w-full h-full hover:scale-110 transition duration-100 ease-in hover:border-2 border-white"
                  src={item.img}
                />
              </div>
            </a>
            {/* Content */}
            <div className="content  flex flex-col  py-4 pr-4 md:p-2 ">
              <a href="https://linkshub.vercel.app/">
                <h2 className="text-sm text-purple-200  mb-6 tracking-[0.1rem] font-bold hover:text-[white] md:text-3xl">
                  {item.title}
                </h2>
              </a>
              <p className="text-xs  font-inter md:w-5/6 md:text-lg">
                {item.description}
              </p>
            </div>
            {/* Links */}
            <div
              className="flex  absolute bg-purple-500  gap-2 md:gap-12 justify-between 
            flex-col right-0 top-0 h-full w-6 rounded-tr-lg rounded-br-lg  px-4 py-6 
             md:p-4 items-center md:h-full md:py-12 md:px-4 md:w-12 md:right-0 md:flex-col "
            >
              <a href={item.ghLink} target="_blank" rel="noopener noreferrer">
                <BiGitRepoForked className=" text-[#062a64] hover:text-white md:text-3xl" />
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <BsFillArrowUpRightCircleFill className=" text-[#062a64] hover:text-white md:text-3xl" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
