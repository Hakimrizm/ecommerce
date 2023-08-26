import { useState } from "react"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleSidebar}
        className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50 transition-transform ${ sidebarOpen ? '' : 'translate-x-64' }`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen z-40 transition-transform ${sidebarOpen ? 'open-sidebar' : ''}`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <Link to="/dashboard" className="flex items-center pl-2.5 mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">LuxeLane</span>
          </Link>

          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/dashboard/user" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">User</Link>
            </li>
            <li>
              <Link to="/dashboard/product" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">Product</Link>
            </li>
            <li>
              <Link to="/dashboard/category" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">Category</Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
