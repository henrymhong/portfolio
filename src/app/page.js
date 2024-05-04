import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <main className="lg:flex min-w-screen w-full min-h-screen h-full bg-gradient-to-br from-slate-900 to-black overflow-clip">
            {/* Left side */}
            <div className="flex lg:justify-end lg:top-0 lg:align-top w-screen lg:h-screen lg:sticky">
                <div className="flex flex-col max-w-md pt-16 pb-3 px-8 md:px-14 space-y-4 text-slate-100 font-inter animate-slideRight lg:animate-slideUp">
                    {/* Introduction/name */}
                    <div className="text-xl font-semibold">Hi, I am</div>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-text pb-2">
                        Henry Hong
                    </div>
                    <div className="text-xl font-semibold">
                        an aspiring web developer!
                    </div>
                    <div className="text-md text-gray-400">
                        This portfolio site was built with responsiveness in
                        mind, so feel free to try different screen sizes!
                    </div>
                    {/* PFP */}
                    <div className="hidden lg:flex justify-center items-center flex-grow">
                        <div>
                            <Image
                                className="rounded-full shadow-2xl border-2 border-white size-52 xl:size-52"
                                src="/me.jpg"
                                alt="Me"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    {/* Social buttons/links */}
                    <div className="flex space-x-5 justify-center items-end pb-5">
                        <a
                            href="https://www.linkedin.com/in/henrymhong/"
                            target="_blank"
                        >
                            <FaLinkedin size={40} />
                        </a>
                        <a href="https://github.com/henrymhong" target="_blank">
                            <FaGithub size={40} />
                        </a>
                    </div>
                </div>
                {/* PFP for smaller than LG breakpoint*/}
                <div className="w-0 lg:hidden sm:flex justify-center items-center flex-grow sm:mr-8 md:mr-14 pt-8 animate-slideUpOut sm:animate-slideDown">
                    <div>
                        <Image
                            className="rounded-full shadow-2xl border-2 border-white size-40"
                            src="/me.jpg"
                            alt="Me"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className="flex w-screen">
                <div className="flex flex-col px-8 md:px-14 lg:px-0 lg:pr-20 pt-5 lg:pt-16 lg:max-w-xl text-slate-100 font-inter text-2xl animate-slideLeft lg:animate-slideDown">
                    <div className="">
                        Projects<div></div>
                    </div>
                    <div className="text-sm border-2 rounded-xl p-2 my-3 bg-gradient-to-tl from-slate-900 to-black">
                        <div className="border-b-2 border-gray-500">Title</div>
                        <div className="border-b-2 border-gray-500">
                            Description
                        </div>
                        <div>Tools</div>
                    </div>
                    <div className="">About</div>
                    <div className="text-sm text-gray-400 pt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nisl rhoncus mattis rhoncus urna neque. In
                        fermentum et sollicitudin ac. Velit egestas dui id
                        ornare arcu odio ut sem. Etiam sit amet nisl purus.
                        Massa eget egestas purus viverra accumsan in nisl.
                        Tincidunt vitae semper quis lectus nulla. Nam libero
                        justo laoreet sit. In metus vulputate eu scelerisque
                        felis imperdiet proin fermentum. Diam in arcu cursus
                        euismod quis. Bibendum est ultricies integer quis auctor
                        elit sed vulputate. Elementum nisi quis eleifend quam
                        adipiscing vitae proin sagittis nisl. Ultricies lacus
                        sed turpis tincidunt. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Nisl
                        rhoncus mattis rhoncus urna neque. In fermentum et
                        sollicitudin ac. Velit egestas dui id ornare arcu odio
                        ut sem. Etiam sit amet nisl purus. Massa eget egestas
                        purus viverra accumsan in nisl. Tincidunt vitae semper
                        quis lectus nulla. Nam libero justo laoreet sit. In
                        metus vulputate eu scelerisque felis imperdiet proin
                        fermentum. Diam in arcu cursus euismod quis. Bibendum
                        est ultricies integer quis auctor elit sed vulputate.
                        Elementum nisi quis eleifend quam adipiscing vitae proin
                        sagittis nisl. Ultricies lacus sed turpis tincidunt.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nisl rhoncus mattis rhoncus urna neque. In
                        fermentum et sollicitudin ac. Velit egestas dui id
                        ornare arcu odio ut sem. Etiam sit amet nisl purus.
                        Massa eget egestas purus viverra accumsan in nisl.
                        Tincidunt vitae semper quis lectus nulla. Nam libero
                        justo laoreet sit. In metus vulputate eu scelerisque
                        felis imperdiet proin fermentum. Diam in arcu cursus
                        euismod quis. Bibendum est ultricies integer quis auctor
                        elit sed vulputate. Elementum nisi quis eleifend quam
                        adipiscing vitae proin sagittis nisl. Ultricies lacus
                        sed turpis tincidunt.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Nisl
                        rhoncus mattis rhoncus urna neque. In fermentum et
                        sollicitudin ac. Velit egestas dui id ornare arcu odio
                        ut sem. Etiam sit amet nisl purus. Massa eget egestas
                        purus viverra accumsan in nisl. Tincidunt vitae semper
                        quis lectus nulla. Nam libero justo laoreet sit. In
                        metus vulputate eu scelerisque felis imperdiet proin
                        fermentum. Diam in arcu cursus euismod quis. Bibendum
                        est ultricies integer quis auctor elit sed vulputate.
                        Elementum nisi quis eleifend quam adipiscing vitae proin
                        sagittis nisl. Ultricies lacus sed turpis
                        tincidunt.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisl rhoncus mattis
                        rhoncus urna neque. In fermentum et sollicitudin ac.
                        Velit egestas dui id ornare arcu odio ut sem. Etiam sit
                        amet nisl purus. Massa eget egestas purus viverra
                        accumsan in nisl. Tincidunt vitae semper quis lectus
                        nulla. Nam libero justo laoreet sit. In metus vulputate
                        eu scelerisque felis imperdiet proin fermentum. Diam in
                        arcu cursus euismod quis. Bibendum est ultricies integer
                        quis auctor elit sed vulputate. Elementum nisi quis
                        eleifend quam adipiscing vitae proin sagittis nisl.
                        Ultricies lacus sed turpis tincidunt.Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Nisl
                        rhoncus mattis rhoncus urna neque. In fermentum et
                        sollicitudin ac. Velit egestas dui id ornare arcu odio
                        ut sem. Etiam sit amet nisl purus. Massa eget egestas
                        purus viverra accumsan in nisl. Tincidunt vitae semper
                        quis lectus nulla. Nam libero justo laoreet sit. In
                        metus vulputate eu scelerisque felis imperdiet proin
                        fermentum. Diam in arcu cursus euismod quis. Bibendum
                        est ultricies integer quis auctor elit sed vulputate.
                        Elementum nisi quis eleifend quam adipiscing vitae proin
                        sagittis nisl. Ultricies lacus sed turpis
                        tincidunt.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisl rhoncus mattis
                        rhoncus urna neque. In fermentum et sollicitudin ac.
                        Velit egestas dui id ornare arcu odio ut sem. Etiam sit
                        amet nisl purus. Massa eget egestas purus viverra
                        accumsan in nisl. Tincidunt vitae semper quis lectus
                        nulla. Nam libero justo laoreet sit. In metus vulputate
                        eu scelerisque felis imperdiet proin fermentum. Diam in
                        arcu cursus euismod quis. Bibendum est ultricies integer
                        quis auctor elit sed vulputate. Elementum nisi quis
                        eleifend quam adipiscing vitae proin sagittis nisl.
                        Ultricies lacus sed turpis tincidunt.Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Nisl
                        rhoncus mattis rhoncus urna neque. In fermentum et
                        sollicitudin ac. Velit egestas dui id ornare arcu odio
                        ut sem. Etiam sit amet nisl purus. Massa eget egestas
                        purus viverra accumsan in nisl. Tincidunt vitae semper
                        quis lectus nulla. Nam libero justo laoreet sit. In
                        metus vulputate eu scelerisque felis imperdiet proin
                        fermentum. Diam in arcu cursus euismod quis. Bibendum
                        est ultricies integer quis auctor elit sed vulputate.
                        Elementum nisi quis eleifend quam adipiscing vitae proin
                        sagittis nisl. Ultricies lacus sed turpis
                        tincidunt.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Nisl rhoncus mattis
                        rhoncus urna neque. In fermentum et sollicitudin ac.
                        Velit egestas dui id ornare arcu odio ut sem. Etiam sit
                        amet nisl purus. Massa eget egestas purus viverra
                        accumsan in nisl. Tincidunt vitae semper quis lectus
                        nulla. Nam libero justo laoreet sit. In metus vulputate
                        eu scelerisque felis imperdiet proin fermentum. Diam in
                        arcu cursus euismod quis. Bibendum est ultricies integer
                        quis auctor elit sed vulputate. Elementum nisi quis
                        eleifend quam adipiscing vitae proin sagittis nisl.
                        Ultricies lacus sed turpis tincidunt.
                    </div>
                </div>
            </div>
        </main>
    );
}
