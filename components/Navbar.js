import React, { useState, useRef } from "react";
import NavButton from "./Navigation/NavButton";

export default function Navbar() {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="fixed z-50 bg-white" onMouseLeave={() => setIsShown(false)}>
            <div className="w-screen h-12">
                <div className="relative flex justify-center lg:justify-start flex-row-reverse items-center h-full mx-60">
                    <NavButton
                        title="CONTACT"
                        href="#contact"
                    />
                    <NavButton
                        title="OUR TEAM"
                        href="#team"
                    />
                    <NavButton
                        title="OUR WORK"
                        href="#work"
                    />
                    <a className="p-4 hover:scale-105 hover:bg-softgray duration-100 pt-2 pb-2"
                        onMouseEnter={() => setIsShown(true)}><p className="text-sm px-3 py-1">ABOUT</p></a>
                    {isShown && (
                        <div
                            className="absolute top-12 right-[306px] w-[200px] h-[88px] bg-white"
                        >
                            <a
                                href="#history"
                                className="flex items-center p-3 hover:bg-hardgray hover:text-white duration-100"
                            >
                                <p className="font-normal text-sm mx-2">
                                    HISTORY
                                </p>
                            </a>
                            <a
                                href="#visimisi"
                                className="flex items-center p-3 hover:bg-hardgray hover:text-white duration-100"
                            >
                                <p className="font-normal text-sm mx-2">
                                    VISION MISSION
                                </p>
                            </a>
                        </div>
                    )}
                    <p className="hidden text-lg font-bold lg:block absolute top-2 lg:left-24 lg:w-36">Company</p>
                </div>
            </div>
        </div>
    )
}