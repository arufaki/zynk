import { Bell, House, MessageCircle, Search, Settings, Users } from "lucide-react";

const Page = () => {
    return (
        <header className="mx-5 my-4">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-2xl text-gray-700">Zynk</h1>
                <div className="flex flex-row gap-2">
                    <Search className="text-gray-700" />
                    <Settings className="text-gray-700" />
                </div>
            </div>
            <div className="flex flex-row justify-evenly my-2">
                <House className="text-gray-700" size={25} />
                <Users className="text-gray-700" size={25} />
                <MessageCircle className="text-gray-700" size={25} />
                <Bell className="text-gray-700" size={25} />
            </div>
        </header>
    );
};

export default Page;
