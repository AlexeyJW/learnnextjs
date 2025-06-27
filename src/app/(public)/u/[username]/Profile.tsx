'use client';
import { useParams } from "next/navigation";


export function Profile () {
    const { username } = useParams<{username:string}>();
    return(
        <div>Profile @{username}</div>
    )
}