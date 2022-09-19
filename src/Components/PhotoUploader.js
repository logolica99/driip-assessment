import React, { useState, useEffect } from "react";

import image_preview from "../images/image-preview.svg";

export default function PhotoUploader() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="photo_uploader">
      {selectedFile && <img src={preview} className="photo_uploader-preview" />}
      {!selectedFile && (
        <img src={image_preview} className="photo_uploader-preview" />
      )}

      <input
        type="file"
        id="imageFile"
        accept="image/*"
        onChange={onSelectFile}
      />
    </div>
  );
}
