import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="p-12 text-white opacity-95">
        <h1 className="text-5xl font-bold">
          <span className="text-[#04bf00] ">About</span> Myself
        </h1>
        <div className="mt-8 space-y-1.5 flex gap-96 w-full">
          <div>
            <h4 className="text-xl ">
              <span className="opacity-70 text-white">Full Name:</span> Md. Jahangir Alam
            </h4>
            <h4 className="text-xl ">
              <span className="opacity-70 text-white">Age : </span> 23
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
              <span className="opacity-70 text-white">Present Address : </span>{" "}
              Gazipur, Dhaka
            </h4>
          </div>
          <div className="space-y-1.5">
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
    </>
  );
};
export default page;
