import { IoTriangleSharp } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import useFetch from '@/app/components/useFetch';
import Menu from "../components/Menu";
import Link from "next/link";

export default async function Homepage() {

    // Kode brugt 
    const classResponse = await fetch("http://localhost:4000/api/v1/classes")

    const classData = await classResponse.json();
    console.log(classData)

    return (
        <div>
            <div>
                <IoTriangleSharp className="" />
                <h1>Popular Classes</h1>
                <HiOutlineMenuAlt3 />
                {/* Menu skulle kunne poppe op når man klikker på burger menu ikonet */}
                <Menu />
            </div>
            <div>
                {/* baggrundsbillede  */}
                <h1>Lower Abs Workout</h1>
            </div>
            <div>
                <h1>Classes for you</h1>
                    <ul>
                        {classData.map((classes) => (
                            <li key={classes.className}>
                                <img src={classes.asset.url}/>
                                <p>{classes.className}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}