import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [folder, setFolder] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !folder) {
      setMessage("Please select a file and specify a folder.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://<backend-url>/upload/${folder}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(`Upload failed: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Folder Name"
        value={folder}
        onChange={(e) => setFolder(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default FileUpload;
