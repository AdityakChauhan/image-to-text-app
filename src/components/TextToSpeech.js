import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

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

  return (
    <Card style={{ maxWidth: 500, margin: "20px auto", padding: "20px", textAlign: "center" }}>
      <CardTitle>Text to Speech (Free)</CardTitle>

      <Button primary={true} onClick={handleTextToSpeech} disabled={speaking}>
        {speaking ? "Speaking..." : "Play Speech"}
      </Button>

      <CardBody>
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          {speaking ? "Speaking..." : "Click to listen"}
        </p>
      </CardBody>
    </Card>
  );
};

export default TextToSpeech;
