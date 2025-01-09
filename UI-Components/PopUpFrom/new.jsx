

import React, { useState, useEffect } from 'react';

const JobApplications = () => {
  const [applications, setApplications] = useState([
    {
        _id: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '01234567890',
        subject: 'Software Developer',
        address: '123 Main St, City, State, ZIP',
        createdAt: new Date('2022-01-01T12:00:00'),
        status: 'pending',
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showDetails, setShowDetails] = useState(null);

  // Fetch applications
//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const fetchApplications = async () => {
//     try {
//       const response = await getAllJobApplication();
//       if (!response.message ==='ok') throw new Error('Failed to fetch applications');
//       const data = response.data
//       setApplications(data);
//     } catch (err) {
//       setError('Failed to load applications');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete application
//   const handleDelete = async (id) => {
//     try {
//       const response = await deleteJobApplication(id)
      
//       if (!response.message === 'ok') throw new Error('Failed to delete application');
      
//       setApplications(applications.filter(app => app._id !== id));
//       setShowConfirm(false);
//       setSelectedId(null);
//     } catch (err) {
//       setError('Failed to delete application');
//     }
//   };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Job Applications</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {applications.map((application) => (
          <div key={application._id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="font-semibold text-lg">{application.name}</h2>
                <p className="text-gray-600">{application.email}</p>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(application.createdAt).toLocaleDateString()}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-1"><span className="font-medium">Subject:</span> {application.subject}</p>
              <p className="text-gray-700"><span className="font-medium">Phone:</span> {application.phone}</p>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDetails(application)}
                className="px-4 py-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 rounded"
              >
                View Details
              </button>
              <button
                onClick={() => {
                  setSelectedId(application._id);
                  setShowConfirm(true);
                }}
                className="px-4 py-2 text-sm bg-red-50 hover:bg-red-100 text-red-600 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {applications.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No applications found
        </div>
      )}

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Application Details</h2>
              <button 
                onClick={() => setShowDetails(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              <p><span className="font-medium">Name:</span> {showDetails.name}</p>
              <p><span className="font-medium">Email:</span> {showDetails.email}</p>
              <p><span className="font-medium">Phone:</span> {showDetails.phone}</p>
              <p><span className="font-medium">Subject:</span> {showDetails.subject}</p>
              <p><span className="font-medium">Address:</span> {showDetails.address}</p>
              <p><span className="font-medium">Applied on:</span> {new Date(showDetails.createdAt).toLocaleString()}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDetails(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this application? This action cannot be undone.</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setSelectedId(null);
                }}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedId)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplications;