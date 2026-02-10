import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../redux/employeeSlice";

export default function EmployeeForm({ editingEmployee, setEditingEmployee }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setRole(editingEmployee.role);
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !role) return;

    if (editingEmployee) {
      dispatch(
        updateEmployee({
          id: editingEmployee.id,
          name,
          role,
        })
      );
      setEditingEmployee(null);
    } else {
      dispatch(addEmployee({ name, role }));
    }

    setName("");
    setRole("");
  };

  return (
    <div className="bg-white shadow p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          {editingEmployee ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
