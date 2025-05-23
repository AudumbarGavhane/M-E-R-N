import React, { useEffect, useState } from "react";
import {
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../../api/employeeApi";
import styles from "./EmployeePage.module.css";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getEmployees()
      .then((response) => {
        setEmployees(response);
        console.log(JSON.stringify(response));
      })
      .catch((error) => console.log("error fetching employees: ", error));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        let result = await deleteEmployee(id);
        setEmployees(employees.filter((emp) => emp.id !== id));
      } catch (error) {
        console.log("Delete failed ", error);
      }
    }
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      await updateEmployee(selectedEmployee.id, selectedEmployee);
      setEmployees(
        employees.map((emp) =>
          emp.id === selectedEmployee.id ? selectedEmployee : emp
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Update failed", error);
    }
  };

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
            <th colSpan={2} className={styles.td_item}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td className={styles.td_item}>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
              <td className={styles.td_item}>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEdit(emp)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Employee</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  value={selectedEmployee.firstName}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      firstName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={selectedEmployee.lastName}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      lastName: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  value={selectedEmployee.email}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePage;
