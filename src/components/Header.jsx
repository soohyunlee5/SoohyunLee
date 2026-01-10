export default function Header() {
    return (
        <header className="flex justify-between w-full">
            <h1 className="text-5xl font-medium tracking-tight ml-5 mb-5 mt-5">
                Soohyun Lee
            </h1>
            <nav className="text-2xl font-normal flex justify-center items-center mr-10 mb-5 mt-5">
                <ul className="flex gap-8">
                    <li>
                        <a href="/" className="relative inline-block group">
                            Home
                            <span className="underline-effect"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="relative inline-block group">
                            About
                            <span className="underline-effect"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="relative inline-block group">
                            Projects
                            <span className="underline-effect"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="relative inline-block group">
                            Contact
                            <span className="underline-effect"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}