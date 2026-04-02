import API from "../api";

function StudentTable({ students, fetchStudents }) {

  const deleteStudent = async (rollNo) => {
    await API.delete(`/students/${rollNo}`);
    fetchStudents();
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s._id}>
            <td>{s.firstName} {s.lastName}</td>
            <td>{s.rollNo}</td>
            <td>{s.contact}</td>
            <td>
            <button className="delete-btn" onClick={() => deleteStudent(s.rollNo)}>
            Delete
            </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;