import { PAGES } from "@/config/pages.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
    href: string;
    isActive: boolean;
    menuItem: string;
}
export default function MenuItem({href, isActive, menuItem}:Props) {
    const pathname = usePathname();
    return (
        <Link
            className={pathname ===href ? 'text-orange-400' : 'text-white/80'}
            href={href}
        >{menuItem}</Link>
    )
}
