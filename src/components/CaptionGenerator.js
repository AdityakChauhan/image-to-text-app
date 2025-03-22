import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";

const ImageCaption = ({ imageFile }) => {
  const [caption, setCaption] = useState("Explanation will appear here...");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  const handleGenerateCaption = async () => {
    if (!imageFile) {
      setNotification({ show: true, message: "Please upload an image first!", type: "error" });
      return;
    }

    setLoading(true);
    setCaption("Generating caption...");

    try {
      const base64Image = await convertImageToBase64(imageFile);
      if (!base64Image) throw new Error("Failed to convert image.");

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: "Explain this image to me and after that at the end end give me multiple  caption in quotes" },
                  {
                    inlineData: {
                      mimeType: "image/jpeg",
                      data: base64Image,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        setCaption(data.candidates[0].content.parts[0].text);
        setNotification({ show: true, message: "Caption generated successfully!", type: "success" });
      } else {
        setCaption("No Explanation generated.");
        setNotification({ show: true, message: "Failed to generate caption.", type: "error" });
      }
    } catch (error) {
      console.error("Explanation Generation Error:", error);
      setCaption("Failed to generate Explanation.");
      setNotification({ show: true, message: "Error generating caption.", type: "error" });
    }

    setLoading(false);
  };

  const convertImageToBase64 = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
      });
    } catch (error) {
      console.error("Error converting image to Base64:", error);
      return null;
    }
  };

  return (
    <>
      <Card style={{ maxWidth: 600, margin: "20px auto", padding: "20px", textAlign: "center" }}>
        <CardTitle>🖼️ AI-Generated Caption</CardTitle>

        <Button primary onClick={handleGenerateCaption} disabled={loading} style={{ marginBottom: "15px" }}>
          {loading ? "Generating..." : "Explain this image"}
        </Button>

        {loading && <ProgressBar animation={true} now={70} style={{ marginBottom: "20px" }} />}

        <CardBody>
          <p style={{ whiteSpace: "pre-wrap", fontWeight: "bold" }}>{caption}</p>
        </CardBody>
      </Card>

      {/* Kendo Notification */}
      <NotificationGroup style={{ right: 20, bottom: 20, alignItems: 'flex-start' }}>
        {notification.show && (
          <Notification
            type={{ style: notification.type, icon: true }}
            closable={true}
            onClose={() => setNotification({ ...notification, show: false })}
          >
            {notification.message}
          </Notification>
        )}
      </NotificationGroup>
    </>
  );
};

export default ImageCaption;
