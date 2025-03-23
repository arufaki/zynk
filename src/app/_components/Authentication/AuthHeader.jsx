import Image from "next/image";

const AuthHeader = () => {
    const shapes = [
        { src: "/svg/circle/eclipse.svg", width: 120, height: 80, className: "absolute top-[-30px] left-[-30px] opacity-10" },
        { src: "/svg/circle/polygon2.svg", width: 30, height: 20, className: "absolute top-[-14px] left-[120px] opacity-10 rotate-180" },
        { src: "/svg/circle/polygon.svg", width: 90, height: 20, className: "absolute bottom-[20px] left-[40px] opacity-10 rotate-45" },
        { src: "/svg/circle/polygon2.svg", width: 40, height: 20, className: "absolute top-[60px] right-[40px] opacity-10 rotate-20" },
        { src: "/svg/circle/eclipse.svg", width: 20, height: 20, className: "absolute bottom-[20px] right-[80px] opacity-10" },
    ];

    return (
        <div className="py-5 relative">
            <div className="mx-5 mb-3 pt-5">
                <h1 className="font-bold text-2xl text-gray-200 z-10">Zynk</h1>
                <h2 className="text-center text-xl text-gray-200 mt-10">
                    Selamat Datang di <strong className="text-2xl">Zynk!</strong>
                </h2>
                <p className="text-center text-sm w-2/3 mx-auto text-gray-200 py-5">Menghubungkan, Berbagi, dan Berinteraksi Tanpa Batas.</p>
            </div>
            <div>
                {shapes.map((shape, index) => (
                    <Image key={index} src={shape.src} priority alt="shape" style={{ width: "auto", height: "auto" }} width={shape.width} height={shape.height} className={shape.className} />
                ))}
            </div>
        </div>
    );
};

export default AuthHeader;
