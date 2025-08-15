import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Header() {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false); // for mobile menu

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("Theme", newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("Theme") || "light";
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const scrollToView = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = (
        <>
            {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
                <div
                    key={section}
                    className="nav-link"
                    onClick={() => scrollToView(section)}
                >
                    {section}
                </div>
            ))}
        </>
    );

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="ml-2 sm:ml-6">
                <span className='text text-2xl font-bold'>Khan</span>
                <span className='blue-text text-2xl font-bold'> Irfan</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-6 items-center text-gray-800 dark:text-white mr-4 sm:mr-8">
                {navItems}
                <button onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === "dark" ? (
                        <Sun className="h-6 w-6 text-yellow-300" />
                    ) : (
                        <Moon className="h-6 w-6 text-blue-400" />
                    )}
                </button>
            </div>

            {/* Mobile menu icon */}
            <div className="sm:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? (
                        <X className="h-6 w-6 text-gray-800 dark:text-white" />
                    ) : (
                        <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col gap-4 items-start px-6 py-4 sm:hidden shadow-md z-50">
                    <button onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === "dark" ? (
                            <Sun className="h-6 w-6 text-yellow-300" />
                        ) : (
                            <Moon className="h-6 w-6 text-blue-400" />
                        )}
                    </button>
                    {navItems}
                </div>
            )}
        </nav>
    );
}

export default Header;
