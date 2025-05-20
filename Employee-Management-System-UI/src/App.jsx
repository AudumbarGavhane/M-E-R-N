
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import EmployeePage from "./components/EmployeePage/EmployeePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from "./components/AddEmployee/AddEmployee";


function App() {


  return (
    <>
           <Router>
            <Header />
            
            <main className="container mt-4">
                <Routes>
                    <Route path="/employees" element={<EmployeePage />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                </Routes>
            </main>
            <Footer />
        </Router>
        </>
  );
}

export default App
