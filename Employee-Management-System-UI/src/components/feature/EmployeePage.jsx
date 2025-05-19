import React, {useEffect, useState} from "react";
import { getEmployees } from "../../api/employeeApi";

const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees()
            .then(response => {
                setEmployees(response);
                console.log(JSON.stringify(response));
            })
            .catch(error => console.log('error fetching employees: ', error));
            
    },[]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Employee List</h1>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeePage;