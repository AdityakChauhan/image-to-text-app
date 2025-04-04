// import React, { useState } from "react";
// import { Button } from "@progress/kendo-react-buttons";
// import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

// const Summarization = ({ extractedText }) => {
//   const [summary, setSummary] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSummarize = async () => {
//     if (!extractedText || extractedText === "No text detected.") {
//       alert("Please extract text before summarizing!");
//       return;
//     }

//     setLoading(true);
//     setSummary("Summarizing...");

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: `Summarize this text:\n\n${extractedText}` }] }],
//           }),
//         }
//       );

//       const data = await response.json();
//       const generatedSummary = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available.";

//       setSummary(generatedSummary);
//     } catch (error) {
//       console.error("Summarization Error:", error);
//       setSummary("Failed to summarize. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <Card style={{ maxWidth: 500, margin: "20px auto", padding: "20px", textAlign: "center" }}>
//       <CardTitle>Summarize Extracted Text</CardTitle>

//       <Button primary={true} onClick={handleSummarize} disabled={!extractedText || extractedText === "No text detected."}>
//         {loading ? "Summarizing..." : "Summarize"}
//       </Button>

//       {summary && (
//         <CardBody>
//           <p style={{ whiteSpace: "pre-wrap", fontWeight: "bold" }}>{summary}</p>
//         </CardBody>
//       )}
//     </Card>
//   );
// };

// export default Summarization;



import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

const Summarization = ({ extractedText }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!extractedText || extractedText.trim() === "") {
      alert("⚠️ Please extract text before summarizing!");
      return;
    }

    setLoading(true);
    setSummary("Summarizing...");

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error("❌ Error: API key is missing. Check your .env file.");
      setSummary("❌ API key missing. Summarization failed.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Summarize the following text:\n\n${extractedText}` }] }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data?.candidates || data.candidates.length === 0 || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error("No summary received from the API.");
      }

      const generatedSummary = data.candidates[0].content.parts[0].text;

      setSummary(generatedSummary);
    } catch (error) {
      console.error("❌ Summarization Error:", error);
      setSummary("❌ Failed to summarize. Try again.");
    }

    setLoading(false);
  };

  return (
    <Card style={{ maxWidth: 500, margin: "20px auto", padding: "20px", textAlign: "center" }}>
      <CardTitle>Summarize Extracted Text</CardTitle>

      <Button primary={true} onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </Button>

      {summary && (
        <CardBody>
          <p style={{ whiteSpace: "pre-wrap", fontWeight: "bold" }}>{summary}</p>
        </CardBody>
      )}
    </Card>
  );
};

export default Summarization;
