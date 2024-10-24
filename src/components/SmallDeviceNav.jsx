import Image from "next/image";
import { MdMenu } from "react-icons/md";

const SmallDeviceNav = () => {
  return (
    <>
      <div className="bg-[#058a03] flex justify-between w-full p-4">
        <div className="flex items-center justify-center gap-3">
          <Image
            width={45}
            height={45}
            className="rounded-full"
            alt="logo"
            src="https://i.ibb.co.com/4NK7Jzf/Md-Jahangir-Alam.jpg"
          />
        </div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent border-transparent drawer-button lg:hidden"
          >
            <MdMenu size={30} className="text-white opacity-90"/>
          </label>
      </div>
    </>
  );
};
export default SmallDeviceNav;
