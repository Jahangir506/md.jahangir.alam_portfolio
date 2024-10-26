import MySkill from "@/components/MySkill";
import Link from "next/link";
import { PiStudentBold } from "react-icons/pi";

const page = () => {
  return (
    <>
      <div className="">
        <div className=" text-white opacity-95">
          <h1 className="text-5xl font-bold">
            <span className="text-[#04bf00] ">About</span> Myself
          </h1>
          <div className="mt-8 flex flex-col gap-4 md:flex-row justify-between pr-0 md:pr-40 w-full">
            <div className="space-y-4">
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">Full Name:</span> Md.
                Jahangir Alam
              </h4>
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">Age : </span> 26
              </h4>
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">Passion : </span> Web
                Developer
              </h4>
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">
                  Permanent Address :{" "}
                </span>{" "}
                Tangail, Dhaka
              </h4>
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">
                  Present Address :{" "}
                </span>{" "}
                Gazipur, Dhaka
              </h4>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">Whatsapp:</span>{" "}
                <span className="opacity-90">+8801615703506</span>
              </h4>
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">Email : </span>
                <Link href="www.gmail.com" target="_blank">
                  <span className="opacity-90 underline cursor-pointer">
                    md.jahangir.alam9649@gmail.com
                  </span>
                </Link>
              </h4>
              <h4 className="text-xl ">
                <span className="opacity-70 text-white">Language : </span>{" "}
                <span className="opacity-90">Bangla</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-16 text-white opacity-95">
          <h1 className="text-5xl font-bold">
            <span className="text-[#04bf00] ">My</span> Education
          </h1>
          <div className="mt-8">
            <div className="grid justify-between gap-12 gird-cols-1 md:grid-cols-2">
              <div className="flex">
                <div className="divider bg-white w-[0.1rem] bg-opacity-50 divider-horizontal divider-start">
                  <div className="bg-[#04bf00] p-2.5 rounded-full">
                    <PiStudentBold size={20} />
                  </div>
                </div>
                <div className="ml-3">
                  <h1 className="text-2xl font-bold">
                    Tangail Polytechnic Institute
                  </h1>
                  <div className="mt-2 space-y-1">
                    <h6>Diploma in Electrical Engineer</h6>
                    <h6>April, 2015 - May, 2019</h6>
                    <h6>Tangail, Dhaka, Bangladesh</h6>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="divider bg-white w-[0.1rem] bg-opacity-50 divider-horizontal divider-start">
                  <div className="bg-[#04bf00] p-2.5 rounded-full">
                    <PiStudentBold size={20} />
                  </div>
                </div>
                <div className="ml-3">
                  <h1 className="text-2xl font-bold">Barashila High School</h1>
                  <div className="mt-2 space-y-1">
                    <h6>Secondary School Certificate</h6>
                    <h6>Science</h6>
                    <h6>April, 2010 - May, 2015</h6>
                    <h6>Gopalpur, Tangail</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* my skill  */}
        <div>
          <MySkill />
        </div>
      </div>
    </>
  );
};
export default page;
