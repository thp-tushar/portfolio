"use client"
import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { companiesLogo } from "@/data/companiesLogo";
import { featuresData } from "@/data/featuresData";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
    const { theme } = useThemeContext();
    return (
        <>
            <div className="flex flex-col items-center  text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
                <div className="mt-9 text-3xl font-semibold opacity-60">
                    Welcome! Remember folks if it works,
                    <span className="text-red-500 animate-pulse opacity-100"> don’t touch it.</span>
                </div>

                <div className="items-center justify-center gap-3 p-1.5 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
                    <div>
                        <ThemeToggle />
                    </div>

                </div>
                <h1 className=" text-5xl/15 md:text-[64px]/19 font-semibold max-w-2xl">
                    Tushar Thapliyal{" "}
                    <span className="text-5xl bg-gradient-to-r from-[#923FEF] dark:from-[#C99DFF] to-[#C35DE8] dark:to-[#E1C9FF] bg-clip-text text-transparent">Software Dev Guy.</span>
                </h1>
                <p className="text-base dark:text-slate-300 max-w-lg mt-2">
                    Welcome to the dev zone, where code reviews are honest, and deadlines are… optimistic.
                </p>

                <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
                    Skill Set
                </h3>
                <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} gradientColor={theme === "dark" ? "#000" : "#fff"}>
                    <div className="flex items-center justify-center">
                        {[...companiesLogo, ...companiesLogo].map((company, index) => (
                            <div
                                key={index}
                                className="mx-11 flex items-center space-x-3"
                            >
                                {/* Logo */}
                                <div className="w-[131px] h-[32px] flex items-center justify-center">
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={131}
                                        height={50}
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                {/* Different text per logo */}
                                <span className="text font-semibold text-slate-600 dark:text-slate-300">
                                    {company.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <SectionTitle text1="PROJECTS" text2="Built for Practice" />

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData.map((feature, index) => {
                    const Wrapper = feature.url ? "a" : "div";

                    return (
                        <Wrapper
                            key={index}
                            href={feature.url}
                            target={feature.url ? "_blank" : undefined}
                            rel={feature.url ? "noopener noreferrer" : undefined}
                            className="block group"
                        >
                            <div className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 w-150 md:w-100 h-100 
     group-hover:shadow-xl transition-all duration-300 ease-out
     hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
                                <feature.icon className="text-purple-500 size-8 mt-4" strokeWidth={1.3} />

                                <h3 className="text-base font-medium group-hover:text-purple-500 transition">
                                    {feature.title}
                                </h3>

                                <ul className="text-slate-400 list-disc list-outside space-y-4">
                                    {feature.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </Wrapper>
                    );
                })}
            </div>


        </>
    );
}