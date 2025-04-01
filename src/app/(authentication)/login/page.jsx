import Link from "next/link";
import FormLogin from "./FormLogin";
import LoginWithGoogle from "./LoginWithGoogle";

const Page = () => {
    return (
        <>
            <div className="text-center pt-8 pb-2">
                <h1 className="text-gray-700 font-bold text-2xl">Masuk</h1>
                <h2 className="text-gray-400 text-base my-5">Silahkan masuk ke akun anda</h2>
            </div>
            <FormLogin />
            <LoginWithGoogle />
            <p className="text-gray-400 text-base py-10 text-center">
                Belum punya akun?{" "}
                <strong className="text-gray-700">
                    <Link href="/register">Daftar</Link>
                </strong>
            </p>
        </>
    );
};

export default Page;
