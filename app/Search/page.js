import BackButton from "../components/BackButton"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function ClassDetail() {

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
                {/* liste over klasserne */}
            </ul>
            <h1>Popular Trainers</h1>
            <ul>
                {/* liste over trænere*/}
            </ul>
        </div>
        

    )
}