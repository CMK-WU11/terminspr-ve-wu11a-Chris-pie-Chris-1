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
        <div>
            {setIsVisibleMenu &&
            <div>
                <button
                    onClick={() => setIsOpen(true)}
                >
                    <HiOutlineMenuAlt3 className="mr-5 fill-[#FFFFFF]"/>
                </button>
            </div>
            }
        {isOpen &&
        <div>
            <button><IoIosClose onClick={() => setIsOpen(false)} /></button>
            <nav>
                <ul>
                    <li><Link href="/Homepage">Home</Link></li>
                    <li><Link href="/Search">Search</Link></li>
                    <li><button onClick={() => setLogonOpen(true)}>Log on</button></li>
                </ul>
                {/* mangler en open og close log ind del */}
                {logonOpen &&
                <div>
                    <form action="">
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