import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const page = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">
        <span className="text-[#04bf00] ">Things </span> I&apos;ve Built
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="hero h-72 w-full  group relative overflow-hidden"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/LpYqLtt/Am-I-Responsive.png",
          }}
        >
          <div className="hero-content group-hover:w-full group-hover:h-72   group-hover:bg-[#07101F] translate-x-[110%] group-hover:translate-x-[0%] transition-all group-hover:duration-700 text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-2xl text-[#04bf00] font-bold">
                Social Questions and Answers
              </h1>
              <div className="flex justify-center mt-10 items-center flex-wrap gap-2">
                <button className=" flex justify-center items-center text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  <RiNextjsFill className="mr-2" /> Next.js
                </button>
                <button className=" flex justify-center items-center text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  <RiTailwindCssFill className="mr-2" /> Tailwind CSS
                </button>
                <button className=" text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  Next.js
                </button>
                <button className=" text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  Next.js
                </button>
                <button className=" text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  Next.js
                </button>
              </div>
              <div className="flex items-center gap-2 mt-16 justify-center">
                <Link
                  href="https://social-questions-and-answers.vercel.app/"
                  target="_blank"
                >
                  <button className="flex justify-center items-center rounded-sm hover:text-white hover:bg-[#04bf00] text-black px-4 bg-white py-2">
                    <MdOutlineMonitor size={18} className="mr-2" /> Preview
                  </button>
                </Link>
                <Link
                  href="https://github.com/Jahangir506/social_questions_and_answers"
                  target="_blank"
                >
                  <button className="flex justify-center items-center rounded-sm hover:text-white hover:bg-[#04bf00] text-black px-4 bg-white py-2">
                    <FaGithub size={18} className="mr-2" /> Client
                  </button>
                </Link>
                <Link
                  href="https://github.com/Jahangir506/social_questions_and_answers"
                  target="_blank"
                >
                  <button className="flex justify-center items-center rounded-sm hover:text-white hover:bg-[#04bf00] text-black px-4 bg-white py-2">
                    <FaGithub size={18} className="mr-2" /> Server
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero h-72 w-full  group relative overflow-hidden"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/Kx3DmBK/Am-I-Responsive-1-removebg-preview.png",
          }}
        >
          <div className="hero-content group-hover:w-full group-hover:h-72   group-hover:bg-[#07101F] translate-x-[110%] group-hover:translate-x-[0%] transition-all group-hover:duration-700 text-neutral-content text-center">
            <div className="max-w-lg">
              <h1 className="mb-5 text-2xl text-[#04bf00] font-bold">
                Social Questions and Answers
              </h1>
              <div className="flex justify-center mt-10 items-center flex-wrap gap-2">
                <button className=" flex justify-center items-center text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  <RiNextjsFill className="mr-2" /> Next.js
                </button>
                <button className=" flex justify-center items-center text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  <RiTailwindCssFill className="mr-2" /> Tailwind CSS
                </button>
                <button className=" text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  Next.js
                </button>
                <button className=" text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  Next.js
                </button>
                <button className=" text-white hover:text-white bg-[#0E223F] px-6 py-0.5">
                  Next.js
                </button>
              </div>
              <div className="flex items-center gap-2 mt-16 justify-center">
                <Link
                  href="https://electronic-voting-system-beta.vercel.app/"
                  target="_blank"
                >
                  <button className="flex justify-center items-center rounded-sm hover:text-white hover:bg-[#04bf00] text-black px-4 bg-white py-2">
                    <MdOutlineMonitor size={18} className="mr-2" /> Preview
                  </button>
                </Link>
                <Link
                  href="https://github.com/dreamwarrior6m/Electronic-Voting-System"
                  target="_blank"
                >
                  <button className="flex justify-center items-center rounded-sm hover:text-white hover:bg-[#04bf00] text-black px-4 bg-white py-2">
                    <FaGithub size={18} className="mr-2" /> Client
                  </button>
                </Link>
                <Link
                  href="https://github.com/dreamwarrior6m/EVS-server"
                  target="_blank"
                >
                  <button className="flex justify-center items-center rounded-sm hover:text-white hover:bg-[#04bf00] text-black px-4 bg-white py-2">
                    <FaGithub size={18} className="mr-2" /> Server
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
