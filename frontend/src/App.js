import { useEffect, useState } from "react";
import API from "./api";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>

      <StudentForm fetchStudents={fetchStudents} />

      <StudentTable
        students={students}
        fetchStudents={fetchStudents}
      />
    </div>
  );
}

export default App;