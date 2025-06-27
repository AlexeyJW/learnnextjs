import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

export function Header(){
    return (
        <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-gray-800 text-white p-4">
            <Link 
               href="/"
               className="flex items-center gap-3">
            <Image
               src="/vercel.svg"
               alt="X Logo"
               width={28}
               height={28}
               priority/>

            
            </Link>
            <Menu/>
        </header>
    )
}