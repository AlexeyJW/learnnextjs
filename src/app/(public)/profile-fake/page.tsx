// 'use client';
// import { PAGES } from "@/config/pages.config";
// import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import ProfileFake from "./ProfileFake";

export const metadata: Metadata = {
    title: 'Profile Fake',
    description: 'This is a placeholder for the profile page.',
};
export default function ProfileFakePage() { 
    // const router = useRouter();

    return (
       <ProfileFake/>
    );
}