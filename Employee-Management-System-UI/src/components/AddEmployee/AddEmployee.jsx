import React, { useState } from "react";
import { addEmployee } from "../../api/employeeApi";
import { useNavigate } from "react-router-dom";
import styles from './AddEmployee.module.css'

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(employee);
            await addEmployee(employee);
            alert("Employee added successfully!");
            navigate("/employees"); // or wherever your list page is
        } catch (error) {
            alert("Failed to add employee.");
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
        
                <input className={styles.inputField} type="text" name="firstName" placeholder="FirstName" onChange={handleChange} required />
        
                <input className={styles.inputField} type="text" name="lastName" placeholder="LastName" onChange={handleChange} required />
                
                <input className={styles.inputField} type="email" name="email" placeholder="Email" onChange={handleChange} required />
                 
                <button className={styles.submitBtn} type="submit">Add Employee</button>
                
            </form>
        </div>
    );
};

export default AddEmployee;
