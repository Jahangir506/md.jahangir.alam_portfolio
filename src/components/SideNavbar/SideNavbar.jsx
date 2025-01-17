import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SideNavbar = () => {
  return (
    <>
      <div>
        {/* Logo  */}
        <div className="flex-col justify-center items-center p-5">
          <div className="flex items-center justify-center gap-3 mt-2">
            <Image
              width={45}
              height={45}
              className="rounded-full"
              alt="logo"
              src="https://i.ibb.co.com/4NK7Jzf/Md-Jahangir-Alam.jpg"
            />
          </div>
          <h4 className="text-[#04bf00] text-center mt-2 font-bold text-lg">
            {" "}
            Md. Jahangir Alam
          </h4>
        </div>

        {/* Navigate Link  */}
        <div className="my-[105px]">
          <ul>
            <li className="text-center text-white hover:text-[#04bf00] opacity-90  border-t border-b border-gray-600 ">
              <Link href="/" className="flex justify-center py-4">
                <button> Home </button>
              </Link>
            </li>
            <li className=" text-center text-white hover:text-[#04bf00] opacity-90  border-b border-gray-600 ">
              <Link href="/about" className="flex justify-center py-4">
                <button> About </button>
              </Link>
            </li>
            <li className=" text-center text-white hover:text-[#04bf00] opacity-90  border-b border-gray-600 ">
              <Link href="/myWork" className="flex justify-center py-4">
                <button> My Work </button>
              </Link>
            </li>
            <li className=" text-center text-white hover:text-[#04bf00] opacity-90  border-b border-gray-600 ">
              <Link Link href="/accomplishments" className="flex justify-center py-4">
                <button> Accomplishments </button>
              </Link>
            </li>
            <li className=" text-center text-white hover:text-[#04bf00] opacity-90  border-b border-gray-600 ">
              <Link href="/contactMe" className="flex justify-center py-4">
                <> Contact Me </>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Link  */}
        <div className="flex justify-center py-4 items-center">
          <ul className="flex">
            <li>
              <Link href="https://github.com/Jahangir506" target="_blank">
                <FaGithub
                  size={25}
                  className="hover:text-[#04bf00] font-bold text-xl"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://web.facebook.com/md.jahangir.alam49"
                target="_blank"
              >
                <FaFacebook
                  size={25}
                  className="hover:text-[#04bf00] font-bold text-xl"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/jahangir9649/"
                target="_blank"
              >
                <FaLinkedin
                  size={25}
                  className="hover:text-[#04bf00] font-bold text-xl"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideNavbar;
