import { Suspense } from 'react';
import {Explore}  from './Explore';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Explore',
    description: 'This is a placeholder for the explore page.',
};
export default function ExplorePage() {
    return (
        <Suspense>
            <Explore />
        </Suspense>
       
    );
}