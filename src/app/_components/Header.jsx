import { Search, Settings } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl">
            <div className="mx-5 mb-3 pt-3">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-2xl text-gray-700">Zynk</h1>
                    <div className="flex flex-row gap-2">
                        <Search className="text-gray-700" />
                        <Settings className="text-gray-700" />
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
