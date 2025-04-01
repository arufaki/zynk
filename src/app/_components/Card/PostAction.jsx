"use client";

import { Heart, MessageSquareMore, ShareIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";

const PostAction = ({ post }) => {
    const [liked, setLiked] = useState(post.likedbyself);

    const actions = [
        { label: "Suka", icon: Heart, size: 22, color: "#364153", onClick: () => setLiked(!liked) },
        { label: "Komentar", icon: MessageSquareMore, size: 22, color: "#364153", onClick: () => document.getElementById("my_modal_comment")?.showModal() },
        { label: "Bagikan", icon: ShareIcon, size: 22, color: "#364153", onClick: () => alert("Fitur bagikan belum tersedia!") },
    ];

    return (
        <>
            <div className="flex flex-row justify-between border-t border-t-gray-300">
                {actions?.map(({ label, color, size, icon: Icon, onClick }) => (
                    <div className="pt-2 flex flex-row items-center gap-2" key={label} onClick={onClick}>
                        <Icon size={size} color={label === "Suka" && liked ? "red" : color} fill={label === "Suka" && liked ? "red" : "none"} />
                        <p className="text-gray-700 text-base">{label}</p>
                    </div>
                ))}
            </div>
            <Modal id="my_modal_comment">
                <h3 className="font-bold text-lg mb-3 text-gray-700">Komentar</h3>
            </Modal>
        </>
    );
};

export default PostAction;
