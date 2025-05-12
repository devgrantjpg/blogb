import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";

export function Navbar() {
    return (
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
             <Link href="/">
                             <h1 className="text-3xl flex items-center gap-6">
                    Blog<span className="text-blue-500">SMVM</span>
                </h1>
             </Link>
             <div className="hidden sm:flex items-center gap-6">
                <Link href="" className="text sm font-medium hover:text-blue-500 transition-colors">
                Home 
                </Link>
                 <Link href="" className="text sm font-medium hover:text-blue-500 transition-colors">
                Dashboard
                </Link>

             </div>
             </div>
             <div className="flex items-center gap-6">
                <LoginLink className={buttonVariants()}>Log in</LoginLink>
                <RegisterLink className={buttonVariants()}>Sign up</RegisterLink>

             </div>

          
        </nav>
    )
}