import CardPost from "./CardPost";

const PostList = () => {
    const users = [
        {
            uuid: "b56c5d49-fcc0-4b02-bb97-19b74ecd4996",
            profileImg: "/images/maomao.png",
            username: "Fura Saito",
            posts: [
                {
                    postId: 1,
                    time: 5,
                    text: "Gw buka linkedin kan, orang pada hebat banget njir terutama aktif bikin status kegiatan produktif dan aktif buat personal branding. Kemudian gw termotivasi lah mau coba ikut bikin juga. Tapi waktu gw mau ikutan bikin juga malah tiba tiba jadi males, sama gatau mau bikin apa juga 😅",
                    likes: 50,
                    comments: 10,
                    likedbyself: true,
                },
                {
                    postId: 2,
                    time: 5,
                    text: "Gw buka linkedin kan, orang pada hebat banget njir terutama aktif bikin status kegiatan produktif dan aktif buat personal branding. Kemudian gw termotivasi lah mau coba ikut bikin juga. Tapi waktu gw mau ikutan bikin juga malah tiba tiba jadi males, sama gatau mau bikin apa juga 😅",
                    likes: 50,
                    comments: 10,
                    likedbyself: true,
                },
                {
                    postId: 3,
                    time: 5,
                    text: "Gw buka linkedin kan, orang pada hebat banget njir terutama aktif bikin status kegiatan produktif dan aktif buat personal branding. Kemudian gw termotivasi lah mau coba ikut bikin juga. Tapi waktu gw mau ikutan bikin juga malah tiba tiba jadi males, sama gatau mau bikin apa juga 😅",
                    likes: 50,
                    comments: 10,
                    likedbyself: true,
                },
            ],
        },
    ];
    return <div className="space-y-3">{users.map((user) => user.posts?.map((post) => <CardPost user={user} post={post} key={post.postId} />))}</div>;
};

export default PostList;
