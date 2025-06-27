import { Header } from "@/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className="flex flex-col min-h-screen">
           
            <main className="flex-1 max-w-3xl mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    );
}