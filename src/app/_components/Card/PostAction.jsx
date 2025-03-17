import { Heart, MessageSquareMore, ShareIcon } from "lucide-react";

const PostAction = ({ post }) => {
    const actions = [
        { label: "Suka", icon: Heart, size: 22, color: "#364153" },
        { label: "Komentar", icon: MessageSquareMore, size: 22, color: "#364153" },
        { label: "Bagikan", icon: ShareIcon, size: 22, color: "#364153" },
    ];

    return (
        <div className="flex flex-row justify-between border-t border-t-gray-300">
            {actions?.map(({ label, color, size, icon: Icon }) => (
                <div className="pt-2 flex flex-row items-center gap-2" key={label}>
                    <Icon size={size} color={post.likedbyself && Icon == Heart ? "red" : color} fill={post.likedbyself && Icon == Heart ? "red" : "none"} />
                    <p className="text-gray-700 text-base">{label}</p>
                </div>
            ))}
        </div>
    );
};

export default PostAction;
