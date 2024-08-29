import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '@/lib/auth-util'

import {
  FaCar,
  FaCalendarAlt,
  FaChartLine,
  FaTools,
  FaCog,
  FaThLarge,
} from 'react-icons/fa'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, logoutUser } = useAuth()

  const activeClass = (currentPath) =>
    location.pathname === currentPath ? '!text-white relative' : 'text-gray-150'
  const activeMark = (currentPath) =>
    location.pathname === currentPath ? (
      <span className="absolute left-0 ml-[-14px] top-0 h-full w-2 rounded-r-lg bg-green-200"></span>
    ) : null

  return (
    <div className="bg-black-500 text-white-100 w-60 h-screen flex p-14 border-r rounded-r-lg border-gray-130 flex-col justify-between">
      <div>
        <div className="p-14 flex items-center space-x-2">
          <img src="/autoflow.svg" alt="Autoflow Logo" className="w-32" />
        </div>
        <div className="p-14">
          <p className="text-sm text-white">MENU</p>
        </div>
        <nav className="mt-2">
          <ul>
            <li>
              <NavLink
                to="/user/dashboard"
                className={`flex items-center p-4 text-gray-150 hover:text-white-100 ${activeClass(
                  '/user/dashboard'
                )}`}
              >
                {activeMark('/user/dashboard')}
                <FaThLarge className="mr-4" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/fleet"
                className={`flex items-center p-4 text-gray-150 hover:text-white-100 ${activeClass(
                  '/user/fleet'
                )}`}
              >
                {activeMark('/user/fleet')}
                <FaCar className="mr-4" />
                Fleet
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/user/bookings"
                className={`flex items-center p-4 text-gray-150 hover:text-white-100 ${activeClass(
                  '/user/bookings'
                )}`}
              >
                {activeMark('/user/bookings')}
                <FaCalendarAlt className="mr-4" />
                Bookings
                <span className="absolute right-4 top-4 mt-1 w-5 h-5 bg-white-100 text-black-500 font-bold rounded-full text-xs flex items-center justify-center">
                  2
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/analytics"
                className={`flex items-center p-4 text-gray-150 hover:text-white-100 ${activeClass(
                  '/user/analytics'
                )}`}
              >
                {activeMark('/user/analytics')}
                <FaChartLine className="mr-4" />
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/support"
                className={`flex items-center p-4 text-gray-150 hover:text-white-100 ${activeClass(
                  '/user/support'
                )}`}
              >
                {activeMark('/user/support')}
                <FaTools className="mr-4" />
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/settings"
                className={`flex items-center p-4 text-gray-150 hover:text-white-100 ${activeClass(
                  '/user/settings'
                )}`}
              >
                {activeMark('/user/settings')}
                <FaCog className="mr-4" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-6">
        <button
          className="w-full h-8 border px-4 py-1 rounded-full hover:text-black-500 hover:bg-white-100 leading-8"
          onClick={() => (isAuthenticated ? logoutUser() : navigate('/login'))}
        >
          LOGOUT
        </button>
      </div>
    </div>
  )
}

export default Sidebar
