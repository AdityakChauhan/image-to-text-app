// import React, { useState } from "react";
// import ImageUpload from "./components/ImageUpload";
// import TextExtractor from "./components/OCRTextExtractor";
// import Translation from "./components/Translation";
// import Summarization from "./components/Summarization";
// import TextToSpeech from "./components/TextToSpeech";
// import ImageCaption from "./components/CaptionGenerator";
// import "@progress/kendo-theme-default/dist/all.css";
// import "./App.css";




// // Kendo Components
// import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
// import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
// import { ListView } from "@progress/kendo-react-listview";
// import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
// import { ProgressBar } from "@progress/kendo-react-progressbars";
// import {
//   Notification,
//   NotificationGroup,
// } from "@progress/kendo-react-notification";
// import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
// import { Badge } from "@progress/kendo-react-indicators";
// import { Chip } from "@progress/kendo-react-buttons";
// import { Avatar } from "@progress/kendo-react-layout";

// function App() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [extractedText, setExtractedText] = useState("");
//   const [showNotification, setShowNotification] = useState(false);
//   const [tabIndex, setTabIndex] = useState(0);
 

//   const features = [
//     "OCR (Text Extraction)",
//     "AI Caption Generation",
//     "Text Summarization",
//     "Multi-Language Translation",
//     "Text-to-Speech (TTS)",
//     "Beautiful KendoReact UI",
//     "Responsive Design",
//     "Supports Handwriting OCR",
//     "Generative AI Integration",
//     "Cloud Processing",
//   ];

//   return (
//     <div className="app-container">
//       {/* AppBar */}
//       <AppBar>
//         <AppBarSection>
//           <Avatar
//             type="image"
//             shape="circle"
//             style={{ width: 50, height: 50 }}
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
//           />
//         </AppBarSection>
//         <AppBarSection>
//           <h1 style={{ color: "white", margin: 0, fontSize: "1.5rem" }}>
//             AI Image-to-Text Converter
//           </h1>
//         </AppBarSection>
//         <AppBarSection>
//           <Badge themeColor="info" size="large">
//             New
//           </Badge>
//         </AppBarSection>
//       </AppBar>

//       {/* Notification */}
//       <NotificationGroup>
//         {showNotification && (
//           <Notification
//             type={{ style: "success", icon: true }}
//             closable={true}
//             onClose={() => setShowNotification(false)}
//           >
//             Image Uploaded Successfully!
//           </Notification>
//         )}
//       </NotificationGroup>

//       {/* TabStrip for Features */}
//       <TabStrip selected={tabIndex} onSelect={(e) => setTabIndex(e.selected)}>
//         <TabStripTab title="Upload & OCR">
//           <ImageUpload
//             onImageSelect={(img) => {
//               setSelectedImage(img);
//               setShowNotification(true);
//             }}
//           />
//           {selectedImage && <ImageCaption imageFile={selectedImage} />}
//           {selectedImage && (
//             <TextExtractor
//               imageFile={selectedImage}
//               onTextExtracted={setExtractedText}
//             />
//           )}
//         </TabStripTab>

//         <TabStripTab title="Translate & Summarize">
//           {extractedText && extractedText !== "No text detected." && (
//             <>
//               <Translation extractedText={extractedText} />
//               <Summarization extractedText={extractedText} />
//             </>
//           )}
//         </TabStripTab>

//         <TabStripTab title="Text to Speech">
//           {extractedText && extractedText !== "No text detected." && (
//             <TextToSpeech extractedText={extractedText} />
//           )}
//         </TabStripTab>

//         <TabStripTab title="Features">
//           <Card style={{ maxWidth: "700px", margin: "20px auto" }}>
//             <CardTitle>App Highlights</CardTitle>
//             <CardBody>
//               <ListView
//                 data={features}
//                 item={(props) => (
//                   <div className="feature-item">
//                     <Chip text={props.dataItem} />
//                   </div>
//                 )}
//                 style={{ background: "#f4faff" }}
//               />
//             </CardBody>
//           </Card>
//         </TabStripTab>
//       </TabStrip>

//       {/* PanelBar for Extras */}
//       <PanelBar
//         expandMode="single"
//         style={{ maxWidth: "700px", margin: "20px auto" }}
//       >
//         <PanelBarItem title="Progress Info">
//           <ProgressBar
//             value={selectedImage ? 100 : 0}
//             style={{ width: "90%" }}
//           />
//         </PanelBarItem>
//         <PanelBarItem title="AI Model Used">
//           <p>Gemini 2.0 (Google Generative AI)</p>
//         </PanelBarItem>
//       </PanelBar>

//       <footer className="footer">
//         © 2025 AI Image to Text App | Powered by KendoReact
//       </footer>
//     </div>
//   );
// }

// export default App;



//this is the last file that worked

// import React, { useState } from "react";
// import ImageUpload from "./components/ImageUpload";
// import TextExtractor from "./components/OCRTextExtractor";
// import Translation from "./components/Translation";
// import Summarization from "./components/Summarization";
// import TextToSpeech from "./components/TextToSpeech";
// import ImageCaption from "./components/CaptionGenerator";
// import "@progress/kendo-theme-default/dist/all.css";
// import "./App.css";

// // Kendo UI Components
// import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
// import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
// import { ProgressBar } from "@progress/kendo-react-progressbars";
// import { Notification, NotificationGroup } from "@progress/kendo-react-notification";
// import { Button } from "@progress/kendo-react-buttons";
// import { Avatar } from "@progress/kendo-react-layout";
// import { Badge } from "@progress/kendo-react-indicators";

// function App() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [extractedText, setExtractedText] = useState("");
//   const [showNotification, setShowNotification] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(null);

//   return (
//     <div className="app-container">
//       {/* AppBar (Top Navigation) */}
//       <AppBar style={{ backgroundColor: "#1E1E1E", color: "white" }}>
//         <AppBarSection>
//           <svg xmlns="http://www.w3.org/2000/svg" width="70.359" height="70.359" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="free">
//   <path d="M4.336 4.2a.69.69 0 0 1 .192.094c.044.032.09.08.09.14 0 .101-.13.171-.21.206-.166.071-.37.097-.55.097-.18 0-.385-.026-.55-.097-.081-.035-.211-.105-.211-.207 0-.062.052-.112.1-.146a.804.804 0 0 1 .253-.109l.01-.002.008.002c.152.027.307.046.461.05a1.56 1.56 0 0 0 .385-.03l.012-.002.01.004zm-.51-1.874a.138.138 0 1 1 .195-.196.138.138 0 0 1-.196.196z"></path>
//   <path d="M3.343 2.75c-.067-.023-.218-.08-.218-.169 0-.079.122-.132.183-.156.123-.05.267-.074.399-.087l.023-.002.014.02a.222.222 0 0 0 .18.092.22.22 0 0 0 .179-.093l.013-.019.024.002c.131.013.275.038.398.087.061.024.183.077.183.156 0 .089-.15.146-.218.17a1.826 1.826 0 0 1-.58.083c-.188 0-.401-.021-.58-.084z"></path>
//   <path d="m1.444 2.67.035.01c.21.064.427.114.646.138.152.016.308.02.46.003.14-.015.314-.054.436-.132l.073.007a.558.558 0 0 0 .223.13c.187.066.41.089.606.089.197 0 .42-.023.606-.089a.666.666 0 0 0 .175-.087l.011-.008h.033l.01.009c.175.138.29.332.294.559a.722.722 0 0 1-.15.44c-.11.148-.266.255-.437.324a2.651 2.651 0 0 1-.099.038c-.155.055-.35.059-.514.048a3.385 3.385 0 0 1-.63-.105 3.601 3.601 0 0 1-.603-.212 1.508 1.508 0 0 1-.429-.275 3.278 3.278 0 0 0-.686-.524 4.926 4.926 0 0 0-.562-.278l-.087-.037.087-.037c.178-.077.327-.06.502-.01z"></path>
//   <path d="M4.918 2.709c.072-.104.168-.205.273-.276.244-.164.602-.122.737.148.053.104.054.219.023.33a.967.967 0 0 1-.146.29c-.061.086-.13.166-.204.241a2.861 2.861 0 0 1-.43.359 1.115 1.115 0 0 1-.113.067l-.36.119a.965.965 0 0 0 .237-.224.794.794 0 0 0 .14-.296 2.17 2.17 0 0 0 .497-.43.699.699 0 0 0 .106-.202c.01-.04.016-.088-.003-.127a.215.215 0 0 0-.053-.057V2.65a.18.18 0 0 0-.129-.042c-.115.008-.231.121-.3.206-.008.01-.076.091-.073.096a.513.513 0 0 1-.122.034.844.844 0 0 0-.089-.118l-.061-.068.07-.05z"></path>
//   <path fill="none" d="M0 0h6.827v6.827H0z"></path>
// </svg>
//         </AppBarSection>
//         <AppBarSection>
//           <h1 className="app-title">AI Image-to-Text Converter</h1>
//         </AppBarSection>
//         {/* <AppBarSection>
//           <Badge themeColor="info" size="large">New</Badge>
//         </AppBarSection> */}
//       </AppBar>

//       {/* Notification Popup */}
//       <NotificationGroup>
//         {showNotification && (
//           <Notification
//             type={{ style: "success", icon: true }}
//             closable={true}
//             onClose={() => setShowNotification(false)}
//           >
//             Image Uploaded Successfully!
//           </Notification>
//         )}
//       </NotificationGroup>

//       {/* Upload Section */}
//       <div className="upload-container">
//       <h3 style={{ color: "#fff" }}>Upload Your Image</h3>
//       <ImageUpload
//           onImageSelect={(img) => {
//             setSelectedImage(img);
//             setShowNotification(true);
//             setActiveFeature("OCR");
//           }}
//         />
//       </div>

//       {/* Feature Buttons */}
//       <div className="feature-buttons">
//         <Button onClick={() => setActiveFeature("OCR")} disabled={!selectedImage}>
//           🔍 Extract Text (OCR)
//         </Button>
//         <Button onClick={() => setActiveFeature("Caption")} disabled={!selectedImage}>
//           📝 AI Caption Generator
//         </Button>
//         <Button onClick={() => setActiveFeature("Translate")} disabled={!extractedText}>
//           🌍 Translate
//         </Button>
//         <Button onClick={() => setActiveFeature("Summarize")} disabled={!extractedText}>
//           ✂️ Summarize
//         </Button>
//         <Button onClick={() => setActiveFeature("TTS")} disabled={!extractedText}>
//           🔊 Text-to-Speech
//         </Button>
//       </div>

//       {/* Dynamic Content Area */}
//       <div className="feature-output">
//         {activeFeature === "OCR" && selectedImage && (
//           <TextExtractor imageFile={selectedImage} onTextExtracted={setExtractedText} />
//         )}
//         {activeFeature === "Caption" && selectedImage && <ImageCaption imageFile={selectedImage} />}
//         {activeFeature === "Translate" && extractedText && <Translation extractedText={extractedText} />}
//         {activeFeature === "Summarize" && extractedText && <Summarization extractedText={extractedText} />}
//         {activeFeature === "TTS" && extractedText && <TextToSpeech extractedText={extractedText} />}
//       </div>

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <ProgressBar value={selectedImage ? 100 : 0} style={{ width: "90%" }} />
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         © 2025 AI Image-to-Text App | Powered by KendoReact
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import ImageUpload from "./components/ImageUpload";
import TextExtractor from "./components/OCRTextExtractor";
import Translation from "./components/Translation";
import Summarization from "./components/Summarization";
import TextToSpeech from "./components/TextToSpeech";
import ImageCaption from "./components/CaptionGenerator";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

// Kendo UI Components
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
// import { ProgressBar } from "@progress/kendo-react-progressbars";
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";
import { Button } from "@progress/kendo-react-buttons";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (extractedText) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(extractedText.substring(0, i));
        i++;
        if (i > extractedText.length) clearInterval(interval);
      }, 50);
    }
  }, [extractedText]);

  return (
    <div className="app-container">
      {/* AppBar (Top Navigation) */}
      <AppBar style={{ backgroundColor: "#0f0f10", color: "white" }}>
        <AppBarSection>
          <h1 className="app-title">🚀 ParserGenie AI</h1>
        </AppBarSection>
      </AppBar>

      {/* Notification Popup */}
      <NotificationGroup>
        {showNotification && (
          <Notification
            type={{ style: "success", icon: true }}
            closable={true}
            onClose={() => setShowNotification(false)}
          >
            ✅ Image Uploaded Successfully!
          </Notification>
        )}
      </NotificationGroup>

      {/* Upload Section */}
      <div className="upload-container">
        <h3 style={{ color: "#fff" }}>Upload Your Image</h3>
        <ImageUpload
          onImageSelect={(img) => {
            setSelectedImage(img);
            setShowNotification(true);
            setActiveFeature("OCR");
          }}
        />
      </div>

      {/* Feature Buttons */}
      <div className="feature-buttons">
        <Button onClick={() => setActiveFeature("OCR")} disabled={!selectedImage}>🔍 Extract Text</Button>
        <Button onClick={() => setActiveFeature("Caption")} disabled={!selectedImage}>📝 AI Caption</Button>
        <Button onClick={() => setActiveFeature("Translate")} disabled={!extractedText}>🌍 Translate</Button>
        <Button onClick={() => setActiveFeature("Summarize")} disabled={!extractedText}>✂️ Summarize</Button>
        <Button onClick={() => setActiveFeature("TTS")} disabled={!extractedText}>🔊 Speak</Button>
      </div>

      {/* Dynamic Content Area */}
      <div className="feature-output">
        {activeFeature === "OCR" && selectedImage && <TextExtractor imageFile={selectedImage} onTextExtracted={setExtractedText} />}
        {activeFeature === "Caption" && selectedImage && <ImageCaption imageFile={selectedImage} />}
        {activeFeature === "Translate" && extractedText && <Translation extractedText={extractedText} />}
        {activeFeature === "Summarize" && extractedText && <Summarization extractedText={extractedText} />}
        {activeFeature === "TTS" && extractedText && <TextToSpeech extractedText={typedText} />}
      </div>
    </div>
  );
}

export default App;
