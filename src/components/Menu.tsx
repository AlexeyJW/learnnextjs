'use client';
import {PAGES} from '@/config/pages.config';
import {MENU} from '@/components/menu.data';
import Link from 'next/link';
import MenuItem from '@/components/MenuItem';
import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';

export default function Menu() {
    const pathname =usePathname();
    return (
        <nav className="flex gap-6 text-sm text-white/80">
                {MENU.map((item) =>(
                    <MenuItem 
                         key={item.name}
                         href={item.href} 
                         menuItem={item.name} 
                         isActive={!!match(item.href)(pathname)}/>))}
            </nav>
    )
}