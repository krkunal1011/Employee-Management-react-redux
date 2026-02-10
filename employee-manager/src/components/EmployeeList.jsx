import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/employeeSlice";

export default function EmployeeList({ setEditingEmployee }) {
  const employees = useSelector((state) => state.employees.list);
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">Employees</h2>

      {employees.map((emp) => (
        <div
          key={emp.id}
          className="flex justify-between items-center border p-3 rounded mb-2"
        >
          <div>
            <p className="font-semibold">{emp.name}</p>
            <p className="text-sm text-gray-600">{emp.role}</p>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => setEditingEmployee(emp)}
              className="bg-yellow-400 px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteEmployee(emp.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
