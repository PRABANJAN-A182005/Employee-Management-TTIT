import { AlertTriangle, X } from "lucide-react";
function DeleteConfirmation({
    employee,
    onCancel,
    onConfirm,
    loading
}) {

    if (!employee) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-3 rounded-full">
                            <AlertTriangle
                                className="text-red-600"
                                size={24}
                            />
                        </div>
                        <h2 className="text-xl font-bold">
                            Delete Employee
                        </h2>
                    </div>
                    <button
                        onClick={onCancel}
                        disabled={loading}
                        className="text-gray-500 hover:text-black"
                    >
                        <X size={22} />
                    </button>
                </div>               
                <p className="text-gray-600 mb-6">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold text-gray-900">
                        {employee.name}
                    </span>
                    ? This action cannot be undone.
                </p>                
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        disabled={loading}
                        className="px-4 py-2 border rounded-md hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmation;
