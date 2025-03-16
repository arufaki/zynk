import { Search, Settings } from "lucide-react";

const Header = () => {
    return (
        <header className="mx-5 my-4">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-2xl text-gray-700">Zynk</h1>
                <div className="flex flex-row gap-2">
                    <Search className="text-gray-700" />
                    <Settings className="text-gray-700" />
                </div>
            </div>
        </header>
    );
};

export default Header;
