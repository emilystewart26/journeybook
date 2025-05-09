import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#3DB2FF] text-white p-6 shadow-2xl fixed bottom-0 w-full">
            <div className=" max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3">
                    <Image 
                        src="/assets/journeybook_vector_logo_transparent.png"
                        alt="JourneyBook Logo"
                        width={20}
                        height={20}
                        className="h-10 w-10"
                    />
                    <span className="text-lg font-semibold">JourneyBook</span>
                </div>
                <div className="text-sm">
                    © 2025 JourneyBook. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;