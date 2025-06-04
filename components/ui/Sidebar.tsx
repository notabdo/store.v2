    "use client";
    import * as React from "react";
        import { useRef } from "react";
        import { FiSidebar } from "react-icons/fi";
        import { IoMdHome } from "react-icons/io";
        import { RiAdminFill } from "react-icons/ri";
        import { TbArrowsTransferDown } from "react-icons/tb";
        import { GrUpdate } from "react-icons/gr";
        import Link from "next/link";

        function Sidebar() {
        const sidebarRef = useRef<HTMLDivElement | null>(null);

        const toggleSidebar = () => {
            if (sidebarRef.current) {
            sidebarRef.current.classList.toggle("sidebar-toggle");
            }
        };

        return (
            <>
                <header className="flex justify-around"> 
                            <div className=" z-50 flex justify-start bg-[#0f4d4d] p-2 rounded-[1.4vw] sm:rounded-[0.4vw] md:rounded-[0.4vw] lg:rounded-[0.4vw]" onClick={toggleSidebar} > 
                                <FiSidebar className="  lg:text-2xl text-white"/>
                            </div>
                            {/* <h1 className="text-[5vw] sm:text-3xl md:text-4xl font-extrabold">{"<--"} Mohamed Yahya Pharmacy {"-->"}</h1> */}
                        </header>
            <div className="absolute z-50 bg-[#052222e5] h-full top-0 left-0 sidebar w-[70%] lg:w-[25%] blurr duration-200 fix-side" ref={sidebarRef}>
            <div
                className="absolute right-5 top-3 bg-[#0f4d4d] p-2 rounded-[1.4vw] sm:rounded-[0.4vw] md:rounded-[0.4vw] lg:rounded-[0.4vw]"
                onClick={toggleSidebar}
            >
                <FiSidebar className="lg:text-2xl text-white" />
            </div>

            <ul className="lg:text-3xl text-2xl text-[#e2e2e2] pt-10 w-full grid justify-items-start">
                <li className="m-3 p-4 rounded-2xl flex hover:bg-[#8080808e] w-[50%] duration-200">
                <IoMdHome className="mr-2" />
                <Link href="/">Home</Link>
                </li>
                <li className="m-3 p-4 rounded-2xl flex hover:bg-[#8080808e] w-[50%] duration-200">
                <RiAdminFill className="mr-2" />
                <Link href="/admin">Admin</Link>
                </li>

                <li className="m-3 p-4 rounded-2xl flex hover:bg-[#8080808e] w-[50%] duration-200">
                <GrUpdate className="mr-3" />
                <Link href="/phone">Phone</Link>
                </li>

                <li className="m-3 p-4 rounded-2xl flex hover:bg-[#8080808e] w-[50%] duration-200">
                <TbArrowsTransferDown className="mr-3" />
                <Link href="/transfer">Transfer</Link>
                </li>
            </ul>
            </div>
            </>
        );
        }

        export { Sidebar };
