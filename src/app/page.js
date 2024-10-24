import TypeWriterText from "@/components/TypeWriterText";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex md:max-w-full flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 p-2 text-center md:text-start">
          <h1 className="text-3xl mt-4 md:mt-0 md:text-7xl font-bold">Hi,</h1>
          <h1 className="text-3xl md:text-7xl mt-0 md:mt-2 font-bold">
            I&apos;m Jahangir,
          </h1>
          <div className="flex items-center justify-center md:justify-normal mt-2">
            <h1 className="text-3xl md:text-5xl mt-0 md:mt-2 text-[#04bf00] font-bold">
              <TypeWriterText />
            </h1>
          </div>
          <div className="space-y-4 md:space-y-6 mt-2 md:mt-4">
            <p className="">
              I&apos;m a passionate web developer and graphic designer. I
              believe in success through hard work & dedication. I want to join
              in a Professional life to gain exposure, confidence & a sense of
              achievement.
            </p>
            <div className="flex justify-center md:justify-normal flex-wrap gap-4">
              <button className="bg-black/25 hover:text-white text-[#04bf00] px-6 py-0.5">
                Quick learner
              </button>
              <button className="bg-black/25 hover:text-white text-[#04bf00] px-6 py-0.5">
                Good Development Skills
              </button>
              <button className="bg-black/25 hover:text-white text-[#04bf00] px-6 py-0.5">
                Tech Enthusiast
              </button>
              <button className="bg-black/25 hover:text-white text-[#04bf00] px-6 py-0.5">
                Eco-Friendly Person
              </button>
              <button className="bg-black/25 hover:text-white text-[#04bf00] px-6 py-0.5">
                Punctuality and Integrity
              </button>
            </div>
            <div>
              <Link
                href="https://drive.google.com/file/d/1u2bIWCS4HM0MruDqno7cdWbLD9obFvZY/view?usp=drive_link"
                target="_blank"
                download
              >
                <button className="bg-black/25 hover:text-white uppercase glow border border-green-600 px-12 py-2.5 rounded-sm">
                  Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-7 flex items-center justify-center md:order-last">
          <div className="blob hover:translate-y-6 w-full"></div>
        </div>
      </div>
    </>
  );
}
