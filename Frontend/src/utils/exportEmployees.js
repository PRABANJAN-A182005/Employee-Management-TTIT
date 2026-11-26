export function exportEmployees(employees) {
    if (!employees || employees.length === 0) {
        return false;
    }

    const headers = [
        "Employee ID",
        "Name",
        "Email",
        "Department",
        "Position",
        "Joining Date",
        "Status"
    ];

    const rows = employees.map((employee) => [
        employee.id,
        employee.name,
        employee.email,
        employee.department,
        employee.position,
        employee.joiningDate,
        employee.status
    ]);

    const csvContent = [
        headers,
        ...rows
    ].map((row) =>
            row.map((value) => {
                    const escapedValue = String(value ?? "").replace(/"/g, '""');
                    return `"${escapedValue}"`;
                }).join(",")).join("\n");

    const blob = new Blob(
        ["\uFEFF" + csvContent],
        { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "employees.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return true;
}
