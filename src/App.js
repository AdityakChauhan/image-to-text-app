import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import TextExtractor from "./components/OCRTextExtractor";
import Translation from "./components/Translation";
import Summarization from "./components/Summarization";
import TextToSpeech from "./components/TextToSpeech";
import ImageCaption from "./components/CaptionGenerator";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

// Kendo Components
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { ListView } from "@progress/kendo-react-listview";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Badge } from "@progress/kendo-react-indicators";
import { Chip } from "@progress/kendo-react-buttons";
import { Avatar } from "@progress/kendo-react-layout";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const features = [
    "OCR (Text Extraction)",
    "AI Caption Generation",
    "Text Summarization",
    "Multi-Language Translation",
    "Text-to-Speech (TTS)",
    "Beautiful KendoReact UI",
    "Responsive Design",
    "Supports Handwriting OCR",
    "Generative AI Integration",
    "Cloud Processing",
  ];

  return (
    <div className="app-container">
      {/* AppBar */}
      <AppBar>
        <AppBarSection>
          <Avatar
            type="image"
            shape="circle"
            style={{ width: 50, height: 50 }}
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          />
        </AppBarSection>
        <AppBarSection>
          <h1 style={{ color: "white", margin: 0, fontSize: "1.5rem" }}>
            AI Image-to-Text Converter
          </h1>
        </AppBarSection>
        <AppBarSection>
          <Badge themeColor="info" size="large">
            New
          </Badge>
        </AppBarSection>
      </AppBar>

      {/* Notification */}
      <NotificationGroup>
        {showNotification && (
          <Notification
            type={{ style: "success", icon: true }}
            closable={true}
            onClose={() => setShowNotification(false)}
          >
            Image Uploaded Successfully!
          </Notification>
        )}
      </NotificationGroup>

      {/* TabStrip for Features */}
      <TabStrip selected={tabIndex} onSelect={(e) => setTabIndex(e.selected)}>
        <TabStripTab title="Upload & OCR">
          <ImageUpload
            onImageSelect={(img) => {
              setSelectedImage(img);
              setShowNotification(true);
            }}
          />
          {selectedImage && <ImageCaption imageFile={selectedImage} />}
          {selectedImage && (
            <TextExtractor
              imageFile={selectedImage}
              onTextExtracted={setExtractedText}
            />
          )}
        </TabStripTab>

        <TabStripTab title="Translate & Summarize">
          {extractedText && extractedText !== "No text detected." && (
            <>
              <Translation extractedText={extractedText} />
              <Summarization extractedText={extractedText} />
            </>
          )}
        </TabStripTab>

        <TabStripTab title="Text to Speech">
          {extractedText && extractedText !== "No text detected." && (
            <TextToSpeech extractedText={extractedText} />
          )}
        </TabStripTab>

        <TabStripTab title="Features">
          <Card style={{ maxWidth: "700px", margin: "20px auto" }}>
            <CardTitle>App Highlights</CardTitle>
            <CardBody>
              <ListView
                data={features}
                item={(props) => (
                  <div className="feature-item">
                    <Chip text={props.dataItem} />
                  </div>
                )}
                style={{ background: "#f4faff" }}
              />
            </CardBody>
          </Card>
        </TabStripTab>
      </TabStrip>

      {/* PanelBar for Extras */}
      <PanelBar
        expandMode="single"
        style={{ maxWidth: "700px", margin: "20px auto" }}
      >
        <PanelBarItem title="Progress Info">
          <ProgressBar
            value={selectedImage ? 100 : 0}
            style={{ width: "90%" }}
          />
        </PanelBarItem>
        <PanelBarItem title="AI Model Used">
          <p>Gemini 2.0 (Google Generative AI)</p>
        </PanelBarItem>
      </PanelBar>

      <footer className="footer">
        © 2025 AI Image to Text App | Powered by KendoReact
      </footer>
    </div>
  );
}

export default App;
