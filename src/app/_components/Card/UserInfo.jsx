import { Earth } from "lucide-react";
import Image from "next/image";

const UserInfo = ({ user, post }) => {
    return (
        <div className="flex flex-row w-full items-center gap-3">
            <Image src={user.profileImg} width={38} height={38} style={{ width: "auto", height: "auto" }} alt="profile account" priority className="rounded-full object-cover bg-gray-100" />
            <div>
                <h5 className="text-gray-700 text-sm">{user.username}</h5>
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-gray-700 text-xs">{post.time} Jam lalu</p>
                    <Earth className="text-gray-700" width={16} />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
