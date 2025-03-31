import Link from "next/link";
import FormRegister from "./FormRegister";

const Page = () => {
    return (
        <>
            <div className="text-center pt-8 pb-2">
                <h1 className="text-gray-700 font-bold text-2xl">Daftar Akun</h1>
                <h2 className="text-gray-400 text-base my-5">Buat Akun</h2>
            </div>
            <FormRegister />
            <p className="text-gray-400 text-base my-15 text-center">
                Sudah punya akun?{" "}
                <strong className="text-gray-700">
                    <Link href="/login">Masuk</Link>
                </strong>
            </p>
        </>
    );
};

export default Page;
