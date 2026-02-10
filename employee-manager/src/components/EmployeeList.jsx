import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  updateEmployee,
} from "../redux/employeeSlice";

export default function EmployeeList() {
  const employees = useSelector(
    (state) => state.employees.list
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Employees
      </h2>

      {employees.length === 0 && (
        <p className="text-gray-500">No employees added.</p>
      )}

      <ul className="space-y-3">
        {employees.map((emp) => (
          <li
            key={emp.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{emp.name}</p>
              <p className="text-sm text-gray-600">{emp.role}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch(
                    updateEmployee({
                      ...emp,
                      role: emp.role + " (Edited)",
                    })
                  )
                }
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch(deleteEmployee(emp.id))
                }
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
