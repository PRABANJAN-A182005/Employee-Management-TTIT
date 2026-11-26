import { useState } from "react";

export default function useForm(initialValues, validate) {

    const [employee, setEmployee] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };
    const handleSubmit = (onSubmit, onInvalid) => async (e) => {
        e.preventDefault();
        const validationErrors = validate(employee);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            onInvalid?.(validationErrors);
            return;
        }
        await onSubmit(employee);
    };

    // Reset form
    // const resetForm = () => {
    //     setEmployee(initialValues);
    //     setErrors({});
    // };

    return {
        employee,
        errors,
        handleChange,
        handleSubmit,
        setEmployee
        // resetForm,
    };
}
