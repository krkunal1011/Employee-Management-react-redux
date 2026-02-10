import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";

export default function EmployeeForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    role: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.role) return;

    dispatch(addEmployee(form));

    setForm({ name: "", role: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Employee</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full rounded"
      />

      <input
        name="role"
        value={form.role}
        onChange={handleChange}
        placeholder="Role"
        className="border p-2 w-full rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
