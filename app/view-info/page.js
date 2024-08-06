'use client';

import { useState } from 'react';

export default function ViewInfo() {
  const [image, setImage] = useState('/covimage.jpg');
  const [isEditing, setIsEditing] = useState(false);
  const [newImageURL, setNewImageURL] = useState('');
  const [formData, setFormData] = useState({
    park: 'Banff National Park',
    location: 'Improvement District No. 9, AB T0L, Canada',
    description: 'Banff National Park is renowned for its stunning mountain landscapes, turquoise lakes, and diverse wildlife. It offers a range of outdoor activities and breathtaking views. Arguably one of the most popular parks in Canada, Banff attracts thousands of tourists per year.',
    recommendedLocations: ['Lake Louise', 'Columbia Ice Field', 'Morraine Lake'],
    priceBreakdown: [
      'Food - $100-200 for 2 people',
      'Gas and Travel - $18-27 per way',
      'Other - As preferred by visitor'
    ],
    emergencyInfo: {
      police: '403-763-6600',
      firemen: '403-762-1256'
    }
  });
  const [showModal, setShowModal] = useState(false);

  const handleChangeImage = () => {
    if (newImageURL) {
      setImage(newImageURL);
      setNewImageURL('');
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setShowModal(true);
    } else {
      setIsEditing(!isEditing);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePriceBreakdownChange = (e, index) => {
    const updatedBreakdown = [...formData.priceBreakdown];
    updatedBreakdown[index] = e.target.value;
    setFormData({ ...formData, priceBreakdown: updatedBreakdown });
  };

  const handleEmergencyInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      emergencyInfo: { ...formData.emergencyInfo, [name]: value }
    });
  };

  const handleConfirmChanges = () => {
    setShowModal(false);
    setIsEditing(false);
    // Handle form submission logic here if needed
  };

  const handleCancelChanges = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
      <main className="flex-grow p-8 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-screen-lg bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={image} alt="Park" className="w-full md:w-80 h-auto rounded-lg shadow-md mb-4" />
            <input 
              type="text" 
              value={newImageURL} 
              onChange={(e) => setNewImageURL(e.target.value)} 
              placeholder="Enter new image URL"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 mb-2"
            />
            <button 
              onClick={handleChangeImage} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Change Image
            </button>
          </div>

          <div className="flex-grow">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Park:</label>
                <input 
                  type="text" 
                  name="park" 
                  value={formData.park} 
                  onChange={handleInputChange} 
                  readOnly={!isEditing}
                  className={`w-full p-3 border border-gray-300 rounded-lg ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} shadow-sm text-black`}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Location:</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleInputChange} 
                  readOnly={!isEditing}
                  className={`w-full p-3 border border-gray-300 rounded-lg ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} shadow-sm text-black`}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Recommended Price Breakdown:</label>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  {formData.priceBreakdown.map((item, index) => (
                    <li key={index}>
                      {isEditing ? (
                        <input 
                          type="text" 
                          value={item} 
                          onChange={(e) => handlePriceBreakdownChange(e, index)} 
                          className="w-full p-2 border border-gray-300 rounded-lg bg-white shadow-sm text-black"
                        />
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description:</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleTextareaChange}
                  readOnly={!isEditing}
                  className={`w-full p-3 border border-gray-300 rounded-lg ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} shadow-sm text-black`}
                  rows="6"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Recommended Locations:</label>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  {formData.recommendedLocations.map((location, index) => (
                    <li key={index}>{location}</li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Emergency Contact Information:</label>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Police:</label>
                    <input 
                      type="text" 
                      name="police" 
                      value={formData.emergencyInfo.police} 
                      onChange={handleEmergencyInfoChange} 
                      readOnly={!isEditing}
                      className={`w-full p-3 border border-gray-300 rounded-lg ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} shadow-sm text-black`}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Fire Department:</label>
                    <input 
                      type="text" 
                      name="firemen" 
                      value={formData.emergencyInfo.firemen} 
                      onChange={handleEmergencyInfoChange} 
                      readOnly={!isEditing}
                      className={`w-full p-3 border border-gray-300 rounded-lg ${!isEditing ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} shadow-sm text-black`}
                    />
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                onClick={handleEditToggle} 
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
              >
                {isEditing ? 'Save Changes' : 'Edit Information'}
              </button>
            </form>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-black">
            <h2 className="text-lg font-semibold mb-4 text-center">Confirm Changes</h2>
            <p className="mb-4 text-center">Are you sure you want to save these changes?</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={handleConfirmChanges} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Confirm
              </button>
              <button 
                onClick={handleCancelChanges} 
                className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Discover Colorful Parks. All rights reserved.</p>
      </footer>
    </div>
  );
}








