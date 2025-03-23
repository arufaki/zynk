import FormRegister from "./FormRegister";

const Page = () => {
    return (
        <>
            <div className="text-center pt-8 pb-2">
                <h1 className="text-gray-700 font-bold text-2xl">Daftar Akun</h1>
                <h2 className="text-gray-400 text-base my-5">Buat Akun</h2>
            </div>
            <FormRegister />
        </>
    );
};

export default Page;
