import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Upload } from "@progress/kendo-react-upload";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

const ImageUpload = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const webcamRef = useRef(null);

  // Handle File Upload
  const handleUpload = (event) => {
    const file = event.newState[0]?.getRawFile();
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImagePreview(objectURL);
      onImageSelect(objectURL);
    }
  };

  // Capture image from webcam
  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImagePreview(imageSrc);
      onImageSelect(imageSrc);
      setCameraActive(false);
    }
  };

  return (
    <Card style={{ width: 600, padding: 20, margin: "20px auto", textAlign: "center" }}>
      <CardTitle>Upload or Capture Image</CardTitle>
      <CardBody>
        {/* KendoReact Upload */}
        <Upload
          batch={false}
          multiple={false}
          withCredentials={false}
          onAdd={handleUpload}
        />

        {/* Camera Capture */}
        {cameraActive ? (
          <>
            <Webcam ref={webcamRef} screenshotFormat="image/png" style={{ width: "100%", marginTop: 20 }} />
            <Button onClick={captureImage} style={{ marginTop: 10 }}>Capture Photo</Button>
            <Button onClick={() => setCameraActive(false)} style={{ marginTop: 10, marginLeft: 10 }}>Cancel</Button>
          </>
        ) : (
          <Button onClick={() => setCameraActive(true)} style={{ marginTop: 20 }}>
            Capture from Camera
          </Button>
        )}

        {/* Image Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "100%", marginTop: 20, borderRadius: 8, border: "1px solid #ddd" }}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default ImageUpload;
