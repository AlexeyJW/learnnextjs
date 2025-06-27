'use client';
import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'Profile Fake',
//     description: 'This is a placeholder for the profile page.',
// };
export default function ProfileFake() { 
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Profile Fake</h1>
            <p className="text-gray-600">This is a placeholder for the profile page.</p>

            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={()=>router.push(PAGES.HOME)}> Home </button>
        </div>
    );
}