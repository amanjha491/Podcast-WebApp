import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiAddBoxLine, RiHeartFill, RiCloseLine } from "react-icons/ri";

const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div
      className={`bg-main-green fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${showSidebar ? "left-0" : "-left-full"
        } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4 ">
        <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <RiCloseLine />
        </button>
      </div>
      <div>
        <div class="mb-4">
          <img
            src="https://www.pngarts.com/files/7/Podcast-Transparent-Background-PNG.png"
            class="h-auto max-w-full rounded-full"
            alt="" width={100} />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-black "
              >
                <AiFillHome className="text-2xl" /> Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-black transition-colors"
              >
                <HiMagnifyingGlass className="text-2xl" /> Search
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-black transition-colors"
              >
                <BiLibrary className="text-2xl" /> Library
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-black transition-colors"
              >
                <RiAddBoxLine className="text-2xl" /> Add
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-black transition-colors"
              >
                <RiHeartFill className="text-2xl" /> Favorite
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-xs">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
