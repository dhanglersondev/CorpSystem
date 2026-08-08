
import { Route, Routes } from 'react-router'

import HomePage from '../pages/Home/LoginPage'
import DepartmentsPage from '../pages/Departments/DepartmentsPage'
import DefaultLayout from '../layouts/DefaultLayout'
import PositionsPage from '../pages/Position/PositionsPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import EmployeesPage from '../pages/Employees/EmployeesPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<DefaultLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/departamentos" element={<DepartmentsPage />} />
        <Route path="/cargos" element={<PositionsPage />} />
        <Route path="/funcionarios" element={<EmployeesPage />} />
      </Route>
    </Routes>
  )
}