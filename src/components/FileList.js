import React, { useState, useEffect } from "react";
import axios from "axios";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://my-backend-api-cfd8gbgjd6bafebk.switzerlandnorth-01.azurewebsites.net/files");
      setFiles(response.data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <strong>{file.name}</strong> - {file.size} bytes
            <a href={`http://my-backend-api-cfd8gbgjd6bafebk.switzerlandnorth-01.azurewebsites.net/download/${file.folder}/${file.name}`}>
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
