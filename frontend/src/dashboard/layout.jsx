import Sidebar from "../components/admin/Sidebar"

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        {children}
      </div>
    </>
  )
}