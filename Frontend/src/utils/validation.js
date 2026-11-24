export const validation = (employee) => {
    const errors = {};

    //Regex,negated character class

    //name 
    if(!employee.name.trim()){
        errors.name = "Employee name is required";
    }else if(employee.name.trim().length < 3){
        errors.name = "Name must contain at least 3 characters";
    }else if(!/^[A-Za-z\s.'-]+$/.test(employee.name.trim())){
        errors.name = "Name contains invalid characters";
    }

    //email
    if(!employee.email.trim()){
        errors.email = "Employee email is required";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email.trim())){
        errors.email = "Enter a valid email address";
    }

    //department
    if(!employee.department.trim()){
        errors.department = "Employee department is required";
    }

    //position
    if(!employee.position.trim()){
        errors.position = "Employee position is required";
    }

    //status
    if(!employee.status.trim()){
        errors.status = "Employee status is required";
    }

    //joiningDate
    if(!employee.joiningDate.trim()){
        errors.joiningDate = "Employee joiningDate is required";
    }else{
        const selectedData = new Date(
            employee.joiningDate + "T00:00:00"
        );

        const today = new  Date();
        today.setHours(0,0,0,0);

        if(selectedData > today){
            errors.joiningDate = "Joining date cannot be in the future";
        }
    }

    return errors;
};