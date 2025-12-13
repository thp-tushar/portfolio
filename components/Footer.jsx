"use client"
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const { theme } = useThemeContext();
    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <p className="text-2xl"> Tushar Thapliyal</p>
                    <p className="mt-6">
                        I am a software engineer based in India with a 
                        strong focus on building modern, scalable web applications. 
                        I work primarily with JavaScript, React, Next.js, 
                        and backend technologies to create efficient, user-friendly solutions. 
                        I enjoy solving real-world problems through clean code, 
                        performance optimization, and continuous learning, 
                        while staying aligned with industry best practices.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+91-9717899782</p>
                            <p className="border rounded-2xl w-60 h-8 flex items-center justify-center">
                                <a href="mailto:tusharthapliyal72@gmail.com">tusharthapliyal72@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright 2024 © tusharthapliyal.
            </p>
        </footer>
    );
};