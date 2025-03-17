import { Heart } from "lucide-react";

const PostStats = ({ post }) => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="my-3 flex flex-row gap-1 items-center">
                <Heart fill="red" color="red" size={20} />
                <p className="text-gray-700 text-sm">{post.likes}</p>
            </div>
            <p className="text-gray-700 text-sm underline">{post.comments} Komentar</p>
        </div>
    );
};

export default PostStats;
