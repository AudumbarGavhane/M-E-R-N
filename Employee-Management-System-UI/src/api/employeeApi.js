import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/employees'; 

export const getEmployees = async ()=>{
    try{
        const response= await axios.get(BASE_URL+'/fetchall');
        return response.data;
    }catch(error){
        console.error('Error fetching employees: ',error);
        throw error;
    }
};

export const addEmployee = async (employeeData) => {
    try {
        const response = await axios.post(BASE_URL + "/create", employeeData);
        return response.data;
    } catch (error) {
        console.error("Error adding employee:", error);
        throw error;
    }
};

export const deleteEmployee= async(id) => {
        return await axios.delete(`${BASE_URL}/delete/${id}`);
}

export const updateEmployee = async (id, employee) => {
  return await axios.put(`${BASE_URL}/update/${id}`, employee);
};

