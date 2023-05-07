export default function NavBar() {
    return (
        <nav className="bg-indigo-600">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-14 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    className="inline-flex"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className="hidden"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0"></div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex">
                                <a
                                    href="#"
                                    className="ml-2 mr-8 px-3 py-2 text-xl font-extrabold leading-5 text-gray-300">
                                    POOL.
                                </a>
                                <a
                                    href="#"
                                    className="ml-4 rounded-md bg-indigo-200 px-3 py-2 text-sm font-medium leading-5 text-indigo-600 shadow-md">
                                    Solution
                                </a>
                                <a
                                    href="#"
                                    className="ml-4 rounded-md bg-indigo-200 px-3 py-2 text-sm font-medium leading-5 text-indigo-600 shadow-md">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a
                            href="sign-up"
                            className="ml-4 rounded-md bg-indigo-200 px-3 py-2 text-sm font-medium leading-5 text-indigo-600 shadow-md">
                            Sign Up
                        </a>
                        <a
                            href="sign-in"
                            className="ml-4 rounded-md bg-indigo-200 px-3 py-2 text-sm font-medium leading-5 text-indigo-600 shadow-md">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden sm:hidden">
                <div className="px-2 pb-3 pt-2">
                    <a
                        href="#"
                        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white focus:bg-gray-700 focus:text-white focus:outline-none">
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="mt-1 block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none">
                        Team
                    </a>
                    <a
                        href="#"
                        className="mt-1 block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none">
                        Projects
                    </a>
                    <a
                        href="#"
                        className="mt-1 block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none">
                        Calendar
                    </a>
                </div>
            </div>
        </nav>
    );
}
