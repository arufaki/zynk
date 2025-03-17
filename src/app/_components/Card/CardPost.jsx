import { Heart, MessageSquareMore, ShareIcon } from "lucide-react";
import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostAction from "./PostAction";

const CardPost = ({ post, user }) => {
    return (
        <div className="border border-gray-300 rounded p-3">
            <UserInfo user={user} post={post} />
            <PostContent post={post} />
            <PostStats post={post} />
            <PostAction post={post}/>
        </div>
    );
};

export default CardPost;
