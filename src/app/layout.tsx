import Sider from "../component/Sider";
import "./globals.css";

export default function DashboardLayout({ 
  children }: { 
    children: React.ReactNode 
  }) {
    return (
      <html lang="en">
        <body className= "flex flex-row">
          <div className="w-1/5">
            <Sider />
          </div>
          <div className="w-4/5">
            <div className="flex flex-col bg-gray-200 border-2 border-gray-300 rounded-lg shadow-md p-4">
              <h1 className="text-lg font-bold">Productivity Dashboard</h1>
            </div>
            <div className="flex flex-col h-[80vh] bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md p-4">
              {children}
            </div>
          </div>
        </body>
      </html>
    )
  }