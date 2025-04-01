"use client";

import InputField from "app/_components/Authentication/InputField";
import { useForm } from "react-hook-form";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "next/navigation";

const FormRegister = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = async (data) => {
        const displayName = `${data.firstname} ${data.lastname}`;

        try {
            const { data: user, error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: { displayName },
                },
            });

            if (error) throw error;
            console.log("User created:", user);
            router.push("/login");
        } catch (error) {
            console.log("Error:", error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 mb-10">
            <InputField
                label="Nama Depan"
                type="text"
                name="firstname"
                register={register}
                error={errors.firstname}
                placeholder="Masukkan Nama Depan"
                validation={{ required: "Nama Depan wajib diisi" }}
            />
            <InputField
                label="Nama Belakang"
                type="text"
                name="lastname"
                register={register}
                error={errors.lastname}
                placeholder="Masukkan Nama Belakang"
                validation={{ required: "Nama Belakang wajib diisi" }}
            />
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

            <label className="fieldset-label text-sm mb-3">
                <InputField type="checkbox" name="checkbox" register={register} error={errors.checkbox} validation={{ required: "Anda harus menyetujui syarat & ketentuan" }} />
                Saya menyetujui syarat & ketentuan
            </label>

            <button className={`btn btn-soft w-full rounded-lg ${isValid ? "bg-gray-600 text-gray-100" : "bg-[#E5E7EB] text-[#6B7280]"}`}>Daftar</button>
        </form>
    );
};

export default FormRegister;
