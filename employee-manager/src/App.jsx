import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "./redux/employeeSlice";

export default function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Employee Manager
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() =>
            dispatch(
              addEmployee({
                name: "John",
                role: "Engineer",
              })
            )
          }
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>

        <button
          onClick={() => {
            if (employees[0]) {
              dispatch(
                updateEmployee({
                  ...employees[0],
                  role: "Senior Engineer",
                })
              );
            }
          }}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Update First
        </button>

        <button
          onClick={() => {
            if (employees[0]) {
              dispatch(deleteEmployee(employees[0].id));
            }
          }}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete First
        </button>
      </div>

      <pre className="bg-white p-4 rounded shadow max-w-xl mx-auto">
        {JSON.stringify(employees, null, 2)}
      </pre>
    </div>
  );
}
