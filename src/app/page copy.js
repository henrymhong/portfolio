import { projects } from "../data/projects";
import { Carousel } from "@/components/Carousel";
import {
    HiOutlineArrowCircleLeft,
    HiOutlineArrowCircleRight,
} from "react-icons/hi";

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row w-screen h-screen animated-background bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 font-chakra">
            <div className="flex flex-col space-y-16 w-screen md:w-1/2 pt-10 md:pt-0 justify-center items-center">
                <div className="space-y-6 w-1/2">
                    <div className="font-chakra text-teal-700 text-2xl">
                        Welcome, I am
                    </div>
                    <div className="font-fira text-6xl text-gray-300">
                        Henry Hong
                    </div>
                    <div className="font-chakra text-teal-700 text-2xl">
                        an aspiring web developer!
                    </div>
                </div>
                <div className="flex text-teal-700 space-x-10 justify-center">
                    <button className="border-2 border-teal-500 rounded-md p-3 hover:border-gray-300 hover:text-gray-300">
                        Contact me!
                    </button>
                    <button className="border-2 border-teal-500 rounded-md p-3 hover:border-gray-300 hover:text-gray-300">
                        Resume
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center max-h p-20 text-teal-700 w-screen md:w-1/2 space-y-20">
                <div className="text-6xl font-fira text-gray-300">Projects</div>
                <div className="flex">
                    <button>
                        <HiOutlineArrowCircleLeft
                            size={30}
                            className="mr-4"
                        ></HiOutlineArrowCircleLeft>
                    </button>
                    <Carousel data={projects}></Carousel>
                    <button>
                        <HiOutlineArrowCircleRight
                            size={30}
                            className="ml-4"
                        ></HiOutlineArrowCircleRight>
                    </button>
                </div>
                <div className="text-6xl font-fira text-gray-300">About</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Amet nisl suscipit adipiscing bibendum est
                    ultricies. Nibh praesent tristique magna sit amet purus
                    gravida. Nisl rhoncus mattis rhoncus urna neque viverra
                    justo nec. Adipiscing vitae proin sagittis nisl rhoncus
                    mattis rhoncus urna neque.
                </div>
            </div>
        </main>
    );
}
