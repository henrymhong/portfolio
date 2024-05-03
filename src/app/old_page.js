export default function Home() {
    return (
        <main className="flex min-h-screen flex-row items-center justify-between bg-gradient-to-b from-cyan-500 to-blue-500">
            <div className="border-2 border-black border-solid h-[20vh] flex items-center mt-10">
                <div className="font-caveat text-5xl">Henry's Portfolio</div>
            </div>
            <div className="border-2 border-black border-solid flex flex-col h-[50vh] justify-between">
                Projects:
                <button>Calculator</button>
                <button>ToDo List</button>
                <button>Test</button>
            </div>
            <div className="border-2 border-black border-solid">
                Created by
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/henrymhong/"
                >
                    Henry Hong
                </a>
            </div>
        </main>
    );
}
