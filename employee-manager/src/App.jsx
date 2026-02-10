import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  const [editingEmployee, setEditingEmployee] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Employee Manager
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <EmployeeForm
          editingEmployee={editingEmployee}
          setEditingEmployee={setEditingEmployee}
        />

        <EmployeeList setEditingEmployee={setEditingEmployee} />
      </div>
    </div>
  );
}
