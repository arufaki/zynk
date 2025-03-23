import clsx from "clsx";

const InputField = ({ label, type, name, register, error, validation }) => {
    return (
        <>
            <div className="flex flex-col mb-3">
                <label className="text-gray-700 text-base font-medium mb-2">{label}</label>
                <input
                    type={type}
                    {...register(name, validation)}
                    className={clsx(
                        error ? "border-red-400" : "border-gray-300", // Kondisi error
                        type === "checkbox" ? "checkbox" : "border rounded-lg p-2", // Styling khusus checkbox
                    )}
                />
                {error && <p className="text-red-500 text-xs">{error.message}</p>}
            </div>
        </>
    );
};

export default InputField;
