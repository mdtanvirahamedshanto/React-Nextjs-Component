import React from 'react'

const DeletePopUp = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-4">Confirm Delete</h3>
      <p>Are you sure you want to delete this template?</p>
      <div className="mt-4 flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => setDeleteConfirm(null)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => handleDelete(deleteConfirm)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeletePopUp