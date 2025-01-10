import BackButton from "../components/BackButton"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default async function ClassDetail() {

        // Kode taget fra tidligere opgave (mæglere og Spotify API)
        const classResponse = await fetch("http://localhost:4000/api/v1/classes")

        const classData = await classResponse.json();
        console.log(classData)

        const TrainerResponse = await fetch("http://localhost:4000/api/v1/trainers")

        const TrainerData = await TrainerResponse.json();
        console.log(TrainerData)

    return (
        <div>
            <div>
                <BackButton />
                <HiOutlineMenuAlt3 />
            </div>
            <form>
                {/* search mangler ikon i sig */}
                <input 
                    type="search"
                    id="searchbar"
                    placeholder="Search classes"
                />
            </form>
            <h1>Popular Classes</h1>
            <ul>
                {classData.map((classes) => (
                    <li key={classes.className}>
                        <img src={classes.asset.url}/>
                        <p>{classes.className}</p>
                    </li>
                ))}
            </ul>
            <h1>Popular Trainers</h1>
            <ul>
                {TrainerData.map((trainers) => (
                    <li key={trainers.trainerName}>
                        <img src={trainers.asset.url} />
                        <p>{trainers.trainerName}</p>
                    </li>
                ))}
            </ul>
        </div>
        

    )
}