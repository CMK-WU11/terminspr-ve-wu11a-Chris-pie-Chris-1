'use client'

import { IoIosClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { use, useState } from "react";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    const [logonOpen, setLogonOpen] = useState(false)
    const [isVisibleMenu, setIsVisibleMenu] = useState(false)

    return (
        <div className="z-10 absolute mt-12">
            <div>
                <button
                    onClick={() => setIsOpen(true)}                    
                >
                    <HiOutlineMenuAlt3 className="mr-5 text-[#E4E4E4] w-8 h-12 relative left-80"/>
                </button>
            </div>

        {isOpen &&
        <div className="bg-white w-screen h-32">
            <button><IoIosClose className="bottom-5 w-16 h-16 left-96" onClick={() => setIsOpen(false)} /></button>
            <nav>
                <ul className="flex flex-col justify-center items-center bg-white">
                    <li><Link href="/Homepage">Home</Link></li>
                    <br />
                    <li><Link href="/Search">Search</Link></li>
                    <br />
                    {/* My Schedules mangler, if else */}
                    <li><button onClick={() => setLogonOpen(true)}>Log on</button></li>
                </ul>
                {/* mangler en open og close log ind del */}
                {logonOpen &&
                <div>
                    <form action="" className="flex flex-col justify-center items-center bg-white">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" placeholder="Enter username" />
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter password" />
                        <button>Sign in</button>
                    </form>
                </div>
            }
            </nav>
        </div>
        }
        </div>
    )
}