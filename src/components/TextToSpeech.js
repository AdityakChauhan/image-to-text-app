import React, { useState } from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle, CardSubtitle } from "@progress/kendo-react-layout";

const TextToSpeech = ({ extractedText }) => {
  const [speaking, setSpeaking] = useState(false);

  const handleTextToSpeech = () => {
    if (!extractedText || extractedText.trim() === "No text detected.") {
      alert("Please extract text before using Text-to-Speech!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(extractedText);
    utterance.lang = "en-US";

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeech = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <Card style={{ maxWidth: 600, margin: "20px auto", padding: "20px", textAlign: "center" }}>
      <CardTitle>Text to Speech (Free)</CardTitle>
      <CardSubtitle>Listen to the extracted text below</CardSubtitle>

      {/* Custom Separator */}
      <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>

      <ButtonGroup>
        <Button primary={true} onClick={handleTextToSpeech} disabled={speaking}>
          {speaking ? "Speaking..." : "Play Speech"}
        </Button>
        <Button onClick={handleStopSpeech} disabled={!speaking}>
          Stop
        </Button>
      </ButtonGroup>

      {/* Custom Separator */}
      <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>

      <CardBody>
        <p style={{ marginTop: "10px", fontStyle: "italic", color: "#555" }}>
          {speaking ? "Currently speaking..." : "Click play to listen"}
        </p>
      </CardBody>
    </Card>
  );
};

export default TextToSpeech;
