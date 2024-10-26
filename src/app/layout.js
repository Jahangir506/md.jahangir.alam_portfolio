import SideNavbar from "@/components/SideNavbar/SideNavbar";
import SmallDeviceNav from "@/components/SmallDeviceNav";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Md. Jahangir Alam",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A192F]`}
      >
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-[#0A192F]">
            <div className="lg:hidden block w-full">
              <SmallDeviceNav />
            </div>
            <div className="w-full  p-4 md:p-16">{children}</div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#07101F] text-base-content min-h-full w-64 p-0">
              <SideNavbar></SideNavbar>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
