

// import React, { useState } from "react";
// import { Upload } from "@progress/kendo-react-upload";
// import { Card, CardBody } from "@progress/kendo-react-layout";

// const ImageUpload = ({ onImageSelect }) => {
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleUpload = (event) => {
//     const file = event.newState[0]?.getRawFile();
//     if (file) {
//       const objectURL = URL.createObjectURL(file); // ✅ Creates a URL for the uploaded image
//       setImagePreview(objectURL);
//       onImageSelect(objectURL); // ✅ Pass image to parent component
//     }
//   };

//   return (
//     <Card style={{ width: 400, padding: 20, textAlign: "center" }}>
//       <CardBody>
//         {/* KendoReact Upload Component */}
//         <Upload
//           batch={false}
//           multiple={false}
//           withCredentials={false}
//           onAdd={handleUpload}
//         />
        
//         {/* Display Image Preview */}
//         {imagePreview && (
//           <img
//             src={imagePreview}
//             alt="Uploaded Preview"
//             style={{
//               width: "100%",
//               marginTop: 20,
//               borderRadius: 8,
//               border: "1px solid #ddd",
//             }}
//           />
//         )}
//       </CardBody>
//     </Card>
//   );
// };

// export default ImageUpload;


import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Upload } from "@progress/kendo-react-upload";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody } from "@progress/kendo-react-layout";

const ImageUpload = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const webcamRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.newState[0]?.getRawFile();
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImagePreview(objectURL);
      onImageSelect(objectURL);
    }
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImagePreview(imageSrc);
      onImageSelect(imageSrc);
      setCameraActive(false);
    }
  };

  return (
    <Card style={{ width: 1000, padding: 20, textAlign: "center" }}>
      <CardBody>
        {/* KendoReact Upload Component */}
        <Upload batch={false} multiple={false} withCredentials={false} onAdd={handleUpload} />

        {/* Camera Capture */}
        {cameraActive ? (
          <>
            <Webcam ref={webcamRef} screenshotFormat="image/png" />
            <Button onClick={captureImage}>Capture Photo</Button>
          </>
        ) : (
          <Button onClick={() => setCameraActive(true)}>Capture from Camera</Button>
        )}

        {/* Display Image Preview */}
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: "100%", marginTop: 20, borderRadius: 8, border: "1px solid #ddd" }} />}
      </CardBody>
    </Card>
  );
};

export default ImageUpload;
