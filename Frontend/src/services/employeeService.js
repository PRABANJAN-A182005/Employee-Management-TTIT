const API_URL = `${import.meta.env.VITE_API_URL}/employees`
//create
export const createEmployee = async (employeeData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeData)
    });

    if (!response.ok) {
        throw new Error("Failed to create employee");
    }

    return response.json();
};
// get all employee
export const getEmployees = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return await response.json();
};
// get employee
export const getEmployeeById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch employee details");
    }

    return response.json();
};
// edit
export const updateEmployee = async(id , updatedData) => {
    const response = await fetch(`${API_URL}/${id}` , 
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    }
    );

    if (!response.ok) {
        throw new Error("Failed to update employee");
    }

    return response.json();
}
// delete
export const deleteEmployee = async(id) => {
    const response = await fetch(`${API_URL}/${id}` , 
    {
      method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to Delete employee");
    }
    return true;
}

