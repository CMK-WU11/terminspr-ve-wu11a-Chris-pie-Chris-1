// Taget fra en tidligere opgave
'use client'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className="mt-2 ml-3">
            <button
                onClick={handleBackClick} 
                className="flex items-center space-x-1 p-1 text-black rounded-md"
            ><IoIosArrowBack />
            <span>Back</span>
            </button>
        </div>
    )
}