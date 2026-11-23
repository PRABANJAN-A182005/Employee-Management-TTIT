import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CustomDropdown({
    options,
    value,
    onChange,
    placeholder = "Select Department"
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full border border-gray-300 rounded-md outline-none focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">

            <button type="button" onClick={() => setIsOpen(!isOpen)} 
            className="flex justify-between items-center w-full p-4 cursor-pointer">
                <span>{value || placeholder}</span>
                <ChevronDown size={18} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg">
                    <div className="max-h-48 overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => {
                                onChange("");
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 cursor-pointer">
                            {placeholder}
                        </button>
                        {options.map(option => (
                            <button key={option} type="button" onClick={() => 
                                { onChange(option);
                                    setIsOpen(false);}}
                                className="w-full text-left px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomDropdown;
