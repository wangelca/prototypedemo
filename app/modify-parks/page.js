'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ModifyParks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const parksPerPage = 10;

  const router = useRouter();

  const allParks = [
    { id: 1, name: 'Banff National Park', province: 'Alberta' },
    { id: 2, name: 'Jasper National Park', province: 'Alberta' },
    { id: 3, name: 'Waterton Lakes National Park', province: 'Alberta' },
    { id: 4, name: 'Kootenay National Park', province: 'Alberta' },
    { id: 5, name: 'Elk Island National Park', province: 'Alberta' },
    { id: 6, name: 'Yoho National Park', province: 'British Columbia' },
    { id: 7, name: 'Glacier National Park', province: 'British Columbia' },
    { id: 8, name: 'Pacific Rim National Park Reserve', province: 'British Columbia' },
    { id: 9, name: 'Riding Mountain National Park', province: 'Manitoba' },
    { id: 10, name: 'Wapusk National Park', province: 'Manitoba' },
    { id: 11, name: 'Fundy National Park', province: 'New Brunswick' },
    { id: 12, name: 'Gros Morne National Park', province: 'Newfoundland and Labrador' },
    { id: 13, name: 'Terra Nova National Park', province: 'Newfoundland and Labrador' },
    { id: 14, name: 'Nahanni National Park Reserve', province: 'Northwest Territories' },
    { id: 15, name: 'Wood Buffalo National Park', province: 'Northwest Territories' },
    { id: 16, name: 'Cape Breton Highlands National Park', province: 'Nova Scotia' },
    { id: 17, name: 'Auyuittuq National Park', province: 'Nunavut' },
    { id: 18, name: 'Quttinirpaaq National Park', province: 'Nunavut' },
    { id: 19, name: 'Bruce Peninsula National Park', province: 'Ontario' },
    { id: 20, name: 'Pukaskwa National Park', province: 'Ontario' },
    { id: 21, name: 'Point Pelee National Park', province: 'Ontario' },
    { id: 22, name: 'Rouge National Urban Park', province: 'Ontario' },
    { id: 23, name: 'Prince Edward Island National Park', province: 'Prince Edward Island' },
    { id: 24, name: 'La Mauricie National Park', province: 'Québec' },
    { id: 25, name: 'Forillon National Park', province: 'Québec' },
    { id: 26, name: 'Mingan Archipelago National Park Reserve', province: 'Québec' },
    { id: 27, name: 'Jacques-Cartier National Park', province: 'Québec' },
    { id: 28, name: 'Prince Albert National Park', province: 'Saskatchewan' },
    { id: 29, name: 'Grasslands National Park', province: 'Saskatchewan' },
    { id: 30, name: 'Kluane National Park and Reserve', province: 'Yukon' },
    { id: 31, name: 'Vuntut National Park', province: 'Yukon' },
    { id: 32, name: 'Ivvavik National Park', province: 'Yukon' },
  ];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setCurrentPage(1);
  };

  const filteredParks = allParks.filter(park =>
    (selectedProvince === '' || park.province === selectedProvince) &&
    (searchTerm === '' || park.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalParks = filteredParks.length;
  const totalPages = Math.ceil(totalParks / parksPerPage);
  const displayedParks = filteredParks.slice((currentPage - 1) * parksPerPage, currentPage * parksPerPage);

  const handleViewPark = (id) => {
    if (id === 1) { 
      router.push('/view-info');
    }
  };

  const handleDeletePark = (id) => {
    console.log(`Delete park with id: ${id}`);
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <header className='bg-gray-800 text-white py-6 px-4 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>Discover Colorful Parks</h1>
          <span className='text-lg font-semibold'>Welcome, John S.</span>
          <nav className='space-x-4'>
            <a href='#' className='hover:underline'>Profile</a>
            <a href='#' className='hover:underline'>Settings</a>
            <a href='#' className='hover:underline'>Logout</a>
          </nav>
        </div>
      </header>
      <main className='flex-grow p-8'>
        <div className='text-center mb-6'>
          <p className='text-2xl font-semibold mb-2 text-gray-800'>Find a park</p>
          <input
            type='text'
            placeholder='Search parks...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='p-4 border border-gray-300 rounded-lg w-full max-w-md mx-auto text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='flex flex-wrap justify-center mb-6 space-x-4'>
          <button
            onClick={() => handleProvinceChange('')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === '' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            All
          </button>
          <button
            onClick={() => handleProvinceChange('Alberta')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Alberta' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Alberta
          </button>
          <button
            onClick={() => handleProvinceChange('British Columbia')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'British Columbia' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            British Columbia
          </button>
          <button
            onClick={() => handleProvinceChange('Manitoba')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Manitoba' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Manitoba
          </button>
          <button
            onClick={() => handleProvinceChange('New Brunswick')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'New Brunswick' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            New Brunswick
          </button>
          <button
            onClick={() => handleProvinceChange('Newfoundland and Labrador')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Newfoundland and Labrador' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Newfoundland and Labrador
          </button>
          <button
            onClick={() => handleProvinceChange('Northwest Territories')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Northwest Territories' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Northwest Territories
          </button>
          <button
            onClick={() => handleProvinceChange('Nova Scotia')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Nova Scotia' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Nova Scotia
          </button>
          <button
            onClick={() => handleProvinceChange('Nunavut')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Nunavut' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Nunavut
          </button>
          <button
            onClick={() => handleProvinceChange('Ontario')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Ontario' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Ontario
          </button>
          <button
            onClick={() => handleProvinceChange('Prince Edward Island')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Prince Edward Island' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Prince Edward Island
          </button>
          <button
            onClick={() => handleProvinceChange('Québec')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Québec' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Québec
          </button>
          <button
            onClick={() => handleProvinceChange('Saskatchewan')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Saskatchewan' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Saskatchewan
          </button>
          <button
            onClick={() => handleProvinceChange('Yukon')}
            className={`px-5 py-2 rounded-lg ${selectedProvince === 'Yukon' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            Yukon
          </button>
        </div>
        <div className='flex justify-center mb-6'>
          <button
            onClick={() => router.push('/add-park')}
            className='px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700'
          >
            Add New Park
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-300'>
            <thead>
              <tr className='text-center'>
                <th className='py-3 px-4 border-b text-black'>Park Name</th>
                <th className='py-3 px-4 border-b text-black'>Province</th>
                <th className='py-3 px-4 border-b text-black'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedParks.map((park) => (
                <tr key={park.id} className='text-center'>
                  <td className='py-3 px-4 border-b text-black'>{park.name}</td>
                  <td className='py-3 px-4 border-b text-black'>{park.province}</td>
                  <td className='py-3 px-4 border-b text-black'>
                    <div className='flex justify-center space-x-2'>
                      <button
                        onClick={() => handleViewPark(park.id)}
                        className='bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700'
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeletePark(park.id)}
                        className='bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700'
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center mt-6'>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 border border-gray-300 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
          >
            Previous
          </button>
          <span className='mx-4 text-black'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 border border-gray-300 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </main>
      <footer className='bg-gray-800 text-white py-4 px-6 text-center'>
        <p>&copy; 2024 Discover Colorful Parks</p>
      </footer>
    </div>
  );
}


