import { useState } from "react";

const AddImmigrationForm = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      image: ''
    });
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.title.trim()) newErrors.title = 'Title is required';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
      if (!formData.image.trim()) newErrors.image = 'Image URL is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
  
      try {
        const response = await createImmigration(formData)
  
        if (response.message === 'ok') {
          onSuccess();
          
        } else {
          const error = await response.json();
          alert('Failed to add immigration entry: ' + error.message);
        }
      } catch (error) {
        console.error('Error adding immigration:', error);
        alert('Error adding immigration entry');
      }
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Add New Immigration Entry</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                className={`w-full p-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                className={`w-full p-2 border rounded-md h-32 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL *
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({...prev, image: e.target.value}))}
                className={`w-full p-2 border rounded-md ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter image URL"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>
  
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default AddImmigrationForm