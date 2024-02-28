import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line} from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center justify-between">
            <Link href='/'>
                <Image priority src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" width={120} height={40} style={{width:"auto"}} alt="Google Logo" />
            </Link>
            <div className="flex-1">
                <SearchBox />
            </div>
            <div className="hidden md:inline-flex">
                <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
                <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
            </div>
            <button className="ml-2 bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
        </div>
    </header>
  )
}
