const API_URL = `${import.meta.env.VITE_API_URL}/employees`

export const getEmployees = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return await response.json();
};

export const getEmployeeById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch employee details");
    }

    return response.json();
};

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
