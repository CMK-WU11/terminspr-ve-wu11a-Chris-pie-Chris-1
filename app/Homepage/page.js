import { IoTriangleSharp } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
// import Menu from "../components/Menu";
import Link from "next/link";
import Menu from "../components/Menu";

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
            <div className="flex mt-6 mb-6 place-content-between items-center">
                <IoTriangleSharp className="ml-5 fill-[#E4E4E4]" />
                <h1 className="text-2xl">Popular Classes</h1>
                <Menu />
                {/* Menu som skulle kunne poppe op når man klikker på burger menu ikonet */}
                {/* <Menu /> */}
            </div>
            <article className="relative">
                {/* mangler at teksten er på selve billedet */}
                    <div key={classData.id} className="flex flex-col justify-center items-center">
                        <Image src={classData[3].asset.url} width={250} height={250} alt="" className="rounded scale-x-125 w-84 h-96"/>
                        <p className="flex absolute text-white bottom-10 left-0 ml-14 text-[50px]">{classData[3].className}</p>
                    </div>
            </article>
            <div className="mt-5 ml-5">
                {/* Kode taget fra tidligere opgave fra iPlayBadMusic4UWithPain */}
                <h1 className="text-[28px]">Classes for you</h1>
                    <ul className="flex overflow-x-scroll p-4 w-auto">
                        {classData.map((classes) => (
                            <li key={classes.className} className="min-w-[150px] h-[15m] flex-shrink-0 flex flex-col">
                                <img src={classes.asset.url} className='h-auto rounded-lg w-32 h-36'/>
                                <p className="w-32">{classes.className}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}