import { IoTriangleSharp } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
// import Menu from "../components/Menu";
import Link from "next/link";

export default async function Homepage() {

    // Kode taget fra tidligere opgave (mæglere og Spotify API)
    const classResponse = await fetch("http://localhost:4000/api/v1/classes")

    const classData = await classResponse.json();
    console.log(classData)

    const singleClassResponse = await fetch("http://localhost:4000/api/v1/classes/4")

    const singleClassData = await singleClassResponse.json();
    console.log(singleClassData)

    return (
        <div>
            <div className="flex mt-6 space-x-24">
                <IoTriangleSharp className="" />
                <h1>Popular Classes</h1>
                <HiOutlineMenuAlt3 />
                {/* Menu som skulle kunne poppe op når man klikker på burger menu ikonet */}
                {/* <Menu /> */}
            </div>
            <div>
                {/* mangler at teksten er på selve billedet */}
                    <div key={classData.id} className="flex justify-center items-center">
                        <p>{classData[3].className}</p>
                        <Image src={classData[3].asset.url} width={250} height={250} alt="" className="rounded w-64 h-96"/>
                    </div>
            </div>
            <div className="mt-5 ml-5">
                {/* Kode taget fra tidligere opgave fra iPlayBadMusic4UWithPain */}
                <h1>Classes for you</h1>
                    <ul className="flex overflow-x-scroll p-4 w-auto">
                        {classData.map((classes) => (
                            <li key={classes.className} className="min-w-[150px] h-[15m] flex-shrink-0 flex flex-col">
                                <img src={classes.asset.url} className='h-auto rounded-lg w-28 h-28'/>
                                <p className="w-32">{classes.className}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}