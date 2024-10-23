import TypeWriter from "@/components/TypeWriter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-7xl font-bold">Hi,</h1>
          <h1 className="text-7xl mt-2 font-bold">I&apos;m Jahangir,</h1>
          <span className="flex items-center">
           <h1 className="text-5xl mt-2 font-bold"> As a</h1>
            <h1 className="text-5xl mt-2 text-[#04bf00] font-bold ml-2">
              <TypeWriter />
            </h1>
          </span>
          <p className="mt-4">
            I&apos;m a passionate web developer and graphic designer. I believe
            in success through hard work & dedication. I want to join in a
            Professional life to gain exposure, confidence & a sense of
            achievement.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black/15 px-6 py-0.5">Code</button>
            <button className="bg-black/15 px-6 py-0.5">Code</button>
            <button className="bg-black/15 px-6 py-0.5">Code</button>
          </div>
          <div className="">
            <Link
              href="https://drive.google.com/file/d/1u2bIWCS4HM0MruDqno7cdWbLD9obFvZY/view?usp=drive_link"
              target="_blank"
              download
            >
              <button className="bg-black/15 glow border border-green-600 px-8 py-1.5 rounded-sm">
                Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="blob hover:translate-y-6 w-1/2"></div>
      </div>
    </>
  );
}
