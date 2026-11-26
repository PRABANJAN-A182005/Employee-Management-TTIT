
import { forwardRef } from "react";

const InputField = forwardRef(({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    required = false,
    className = "",
    ...rest
}, ref) => {

    return (
        <div>
            <label
                htmlFor={name}
                className="block mb-2 font-medium"
            >
                {label}
                {required && " *"}
            </label>

            <input
                ref={ref}
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...rest}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    );
});

export default InputField;
