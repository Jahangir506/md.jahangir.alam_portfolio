import { AiOutlineJavaScript } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const MySkill = () => {
  return (
    <>
      <div className="">
        <div className="mt-16 text-white opacity-95">
          <h1 className="text-5xl font-bold">
            <span className="text-[#04bf00] ">My</span> Skills
          </h1>
          <div className="mt-8">
            <h4 className="text-xl font-bold opacity-80">
              Language, Database & Others:
            </h4>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-8">
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <FaHtml5 size={50} />
                  <h6>HTML5</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <FaCss3Alt size={50} />
                  <h6>CSS3</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <AiOutlineJavaScript size={50} />
                  <h6>Javascript</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <DiMongodb size={50} />
                  <h6>MongoDB</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-bold opacity-80">
              Libraries, Frameworks and Tools:
            </h4>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-8">
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <GrReactjs size={50} />
                  <h6>React JS</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <RiNextjsFill size={50} />
                  <h6>Next JS</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <SiExpress size={50} />
                  <h6>Express JS</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <FaNodeJs size={50} />
                  <h6>Node JS</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <RiTailwindCssFill  size={50} />
                  <h6>Tailwind CSS</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <FaGithub   size={50} />
                  <h6>Github</h6>
                </div>
              </div>
              <div className="card rounded-md bg-[#0E223F] w-full md:w-52">
                <div className="card-body hover:text-[#04bf00] justify-center items-center">
                  <IoLogoFirebase  size={50} />
                  <h6>Firebase</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MySkill;
