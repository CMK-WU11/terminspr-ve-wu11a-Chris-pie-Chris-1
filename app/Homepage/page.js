import { IoTriangleSharp } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useFetch from '@/app/components/useFetch';
import Menu from "../components/Menu";

export default function Homepage() {
    const {data: classes, loading, error} = useFetch("http://localhost:4000/api/v1/classes");

    if (loading) {
        return (
            <section className="text-center p-6">
                <p>Indlæser...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="text-center p-6">
                <p className="text-red-500">Kunne ikke hente data. Prøv igen senere.</p>
            </section>
        );
    }

    return (
        <div>
            <div>
                <IoTriangleSharp />
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
                    <li>
                        {/* liste over klasser
                            *tager efter andre sider er opstillet
                        */}
                    </li>
                </ul>
            </div>
        </div>
    )
}