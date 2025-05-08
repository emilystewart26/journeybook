import Link from 'next/link'; 
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-[#3DB2FF] text-white p-4 h-24 flex justify-between items-center shadow-md mb-12" aria-label="Main Navigation"> 
            <Link href="/" className="flex items-center space-x-2">
                <Image 
                    src="/assets/journeybook_vector_logo_transparent.png"
                    alt="JourneyBook Logo"
                    width={70}
                    height={70}
                    className="h-24 w-24"
                />
                <span className="text-xl font-bold">JourneyBook</span>
            </Link>
            <ul className="flex gap-6">
                <li>
                    <Link href="/" className="hover:underline active:font-bold">Home</Link>
                </li>
                <li>
                    <Link href="/add" className="hover:underline active:font-bold">Add Post</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
