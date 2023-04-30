import { BiGitRepoForked } from "react-icons/bi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import data from "../database/data.json";


export default function Card() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="mx-auto card-1 bg-[#8800ff] items-center  w-11/12 flex gap-24 rounded-lg p-12 text-white shadow-2xl relative hover:shadow-3xl mb-12"
          >
            <a href={item.link}>
              <div className="h-[12rem] w-[20rem]">
                <img
                  className="w-full h-full hover:scale-110 transition duration-100 ease-in hover:border-2 border-white"
                  src={item.img}
                />
              </div>
            </a>
            <div className="content">
              <a href="https://linkshub.vercel.app/">
                <h2 className="text-3xl mb-6 tracking-[0.2rem] font-bold hover:text-[white]">
                  {item.title}
                </h2>
              </a>
              <p className="w-5/6 text-lg font-inter">{item.description}</p>
            </div>
            <div className="flex flex-col gap-12 justify-between bg-purple-500 h-full py-12 px-4 absolute right-0 rounded-tr-lg rounded-br-lg">
              <a href={`item.github-link`}>
                <BiGitRepoForked className="text-3xl text-[#062a64] hover:text-white" />
              </a>
              <a href={item.link}>
                <BsFillArrowUpRightCircleFill className="text-3xl text-[#062a64] hover:text-white" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  )
}
