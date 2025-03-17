const PostContent = ({ post }) => {
    return (
        <div className="mt-3">
            <p className="text-base text-gray-700">{post.text}</p>
        </div>
    );
};

export default PostContent;
