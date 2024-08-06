'use client';

import Tabs from './Tabs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-6 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Discover Colorful Parks</h1>
          <span className="text-xl font-semibold">Welcome, John S.</span>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Profile</a>
            <a href="#" className="hover:underline">Settings</a>
            <a href="#" className="hover:underline">Logout</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <Tabs />
        <div className="mt-8 w-full max-w-screen-md flex flex-col gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">System Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-black">User Statistics</h4>
                <p className="text-black">Active Users: 78</p>
                <p className="text-black">New Memberships: 12</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-black">System Health</h4>
                <p className="text-black">Server Status: All systems operational</p>
                <p className="text-black">Database Status: Connected</p>
                <p className="text-black">API Status: Active</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm col-span-2">
                <h4 className="text-lg font-semibold mb-2 text-black">Recent Activities</h4>
                <ul className="list-disc pl-5 text-black">
                  <li>Admin "Alice K." updated park information</li>
                  <li>New event scheduled for August 20th</li>
                  <li>System maintenance completed August 2nd</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Discover Colorful Parks. All rights reserved.</p>
      </footer>
    </div>
  );
}








