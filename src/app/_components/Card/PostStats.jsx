"use client";
import { Heart } from "lucide-react";
import Modal from "../Modal";

const PostStats = ({ post }) => {
    const handleClick = () => {
        document.getElementById("my_modal_comment")?.showModal();
    };

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="my-3 flex flex-row gap-1 items-center">
                    <Heart fill="red" color="red" size={20} />
                    <p className="text-gray-700 text-sm">{post.likes}</p>
                </div>
                <p className="text-gray-700 text-sm underline" onClick={handleClick}>
                    {post.comments} Komentar
                </p>
            </div>
            <Modal id="my_modal_comment">
                <h3 className="font-bold text-lg mb-3 text-gray-700">Komentar</h3>
            </Modal>
        </>
    );
};

export default PostStats;
