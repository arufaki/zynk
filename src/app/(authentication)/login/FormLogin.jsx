"use client";

import InputField from "app/_components/Authentication/InputField";
import Link from "next/link";
import { useForm } from "react-hook-form";

const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Data Login : ", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 mb-5">
            <InputField label="Email" type="email" name="email" register={register} error={errors.email} placeholder="example@mail.com" validation={{ required: "Email wajib diisi" }} />
            <InputField
                label="Password"
                type="password"
                name="password"
                register={register}
                error={errors.password}
                placeholder="Masukkan Password"
                validation={{ required: "Password wajib diisi" }}
            />

            <div className="flex flex-row items-center justify-between">
                <label className="fieldset-label text-sm">
                    <InputField type="checkbox" name="checkbox" register={register} />
                    Remember Me
                </label>
                <Link href="/forgot-password" className="text-sm text-gray-800">
                    Lupa password?
                </Link>
            </div>

            <button className={`btn btn-soft w-full rounded-lg ${isValid ? "bg-gray-600 text-gray-100" : "bg-[#E5E7EB] text-[#6B7280]"}`}>Masuk</button>
        </form>
    );
};

export default FormLogin;
