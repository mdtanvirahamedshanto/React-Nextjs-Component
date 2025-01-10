import React from 'react'

const UpLoadButton = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleUpload = async () => {
        if (!selectedFile) {
          setError("Please select a file first");
          return;
        }
    
        setIsUploading(true);
        console.log("image", formData);
        try {
          const response = await uploadPhoto(formData);
    
          if (!response.message === "ok") throw new Error("Upload failed");
    
          const data = response.data;
          setPhotos((prev) => [...prev, data]);
          setSelectedFile(null);
          // Reset file input
          document.getElementById("fileInput").value = "";
        } catch (err) {
          setError("Failed to upload image. Please try again.");
        } finally {
          setIsUploading(false);
        }
      };
  return (
    <button
    onClick={handleUpload}
    disabled={!selectedFile || isUploading}
    style={{
      backgroundColor: !selectedFile || isUploading ? "#ccc" : "#007bff",
      color: "white",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: !selectedFile || isUploading ? "not-allowed" : "pointer",
    }}
  >
    {isUploading ? "Uploading..." : "Upload Photo"}
  </button>
  )
}

export default UpLoadButton