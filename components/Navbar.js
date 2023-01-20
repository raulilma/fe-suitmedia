import React, { useState, useRef } from "react";
import NavButton from "./Navigation/NavButton";

export default function Navbar() {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="fixed z-50" onMouseLeave={() => setIsShown(false)}>
            <div className="w-screen h-12">
                <div className="relative flex justify-center lg:justify-start flex-row-reverse items-center h-full mx-60">
                    <div className="hidden lg:block w-0.5 h-8 bg-black m-4"></div>
                    <NavButton
                        className="m-4"
                        title="CONTACT"
                        href="#contact"
                    />
                    <NavButton
                        className="m-4"
                        title="OUR TEAM"
                        href="#team"
                    />
                    <NavButton
                        className="m-4"
                        title="OUR WORK"
                        href="#work"
                    />
                    <a className="m-4 hover:scale-105 hover:bg-softgray duration-100 pt-2 pb-2"
                        onMouseEnter={() => setIsShown(true)}><p className="text-sm px-3 py-1">ABOUT</p></a>
                    {isShown && (
                        <div
                            className="absolute top-12 right-[338px] w-35 h-24 bg-white"
                        >
                            <a
                                href="#history"
                                className="flex items-center py-2 px-4 mt-2 hover:scale-105 duration-100"
                            >
                                <p className="font-normal text-sm mx-2">
                                    HISTORY
                                </p>
                            </a>
                            <a
                                href="#visimisi"
                                className="flex items-center py-2 px-4 hover:scale-105 duration-100"
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