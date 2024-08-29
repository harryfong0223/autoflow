import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { FaBell } from 'react-icons/fa'

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const profileMenuRef = useRef(null)
  const notificationsRef = useRef(null)

  const location = useLocation()
  const titles = {
    '/user/dashboard': 'Dashboard',
    '/user/fleet': 'Fleet',
    '/user/bookings': 'Bookings',
    '/user/analytics': 'Analytics',
    '/user/support': 'Support',
    '/user/settings': 'Settings',
  }
  const title = titles[location.pathname] || 'Dashboard'

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu)
    setShowNotifications(false)
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    setShowProfileMenu(false)
  }

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setShowProfileMenu(false)
    }
    if (
      notificationsRef.current &&
      !notificationsRef.current.contains(event.target)
    ) {
      setShowNotifications(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-black-300 border-b border-gray-140 text-white p-5 flex justify-between items-center">
      <div className="text-xl font-semibold pl-2">{title}</div>
      <div className="flex items-center pr-4">
        <div className="mt-2 relative" ref={notificationsRef}>
          <button
            onClick={toggleNotifications}
            className="relative focus:outline-none"
          >
            <FaBell
              className="text-white-100 text-xl cursor-pointer"
              onClick={toggleNotifications}
            />
            <span className="absolute border-2 border-black top-0 right-0 w-2.5 h-2.5 bg-green-200 rounded-full"></span>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg z-10">
              <div className="p-4 border-b border-gray-700">Notification 1</div>
              <div className="p-4 border-b border-gray-700">Notification 2</div>
              <div className="p-4">Notification 3</div>
            </div>
          )}
        </div>
        <div className="ml-8 relative" ref={profileMenuRef}>
          <button
            onClick={toggleProfileMenu}
            className="flex items-center focus:outline-none"
          >
            <img
              className="h-8 w-8 rounded-full"
              src="/avatars/joseph.png"
              alt="User Avatar"
            />
            <span className="ml-2">Joseph</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
              <div className="rounded-lg p-4 hover:bg-gray-700 cursor-pointer">
                Profile
              </div>
              <div className="rounded-lg p-4 hover:bg-gray-700 cursor-pointer">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
