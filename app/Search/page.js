import BackButton from "../components/BackButton"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Menu from "../components/Menu";


export default async function ClassDetail() {

        // Kode taget fra tidligere opgave (mæglere og Spotify API)
        const classResponse = await fetch("http://localhost:4000/api/v1/classes")

        const classData = await classResponse.json();
        console.log(classData)

        const TrainerResponse = await fetch("http://localhost:4000/api/v1/trainers")

        const TrainerData = await TrainerResponse.json();
        console.log(TrainerData)

        // Koden er taget fra en tidligere opgave, Din-Mæglere
        const randomClasses = classData.sort(() => 0.5 - Math.random()).slice(0,4)
        const randomTrainers = TrainerData.sort(() => 0.5 - Math.random()).slice(0,3)

    return (
        <div>
            <div className="flex place-content-between items-center">
                <BackButton />
                <Menu />
            </div>
            <form className="m-6">
                
                <h2 className="text-5xl">Search</h2>
                <br />
                {/* search mangler ikon i sig */}
                <input
                    
                    className="bg-[#E4E4E4] w-64 h-12 rounded p-3"
                    type="search"
                    id="searchbar"
                    placeholder="Search classes"
                />
            </form>
            <div className="mt-5 ml-5">
                <h1>Popular Classes</h1>
                <ul className="flex overflow-x-scroll p-4 w-auto">
                        {classData.map((classes) => (
                            <li key={classes.className} className="min-w-[150px] h-[15m] flex-shrink-0 flex flex-col">
                                <img src={classes.asset.url} className=' rounded-lg w-32 h-36'/>
                                <p className="w-32">{classes.className}</p>
                            </li>
                        ))}
                    </ul>

            </div>
            <div className="mt-5 ml-5">
                <h1>Popular Trainers</h1>
                <ul>
                    {TrainerData.map((trainers) => (
                        <li key={trainers.trainerName} className="flex mt-5">
                            <img src={trainers.asset.url} width={30} height={30} className="'h-auto rounded-lg w-28 h-28'" />
                            <p className="ml-5 mt-2">{trainers.trainerName}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
        

    )
}