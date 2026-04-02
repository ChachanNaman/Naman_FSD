import { useState } from "react";
import API from "../api";
function StudentForm({ fetchStudents }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
    password: "",
    contact: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await API.put(`/students/${form.rollNo}`, form);
      setIsEdit(false);
    } else {
      await API.post("/students", form);
    }

    fetchStudents();
    setForm({
      firstName: "",
      lastName: "",
      rollNo: "",
      password: "",
      contact: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
      <input name="rollNo" placeholder="Roll No" value={form.rollNo} onChange={handleChange} />
      <input name="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} />

      <button type="submit">
        {isEdit ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;