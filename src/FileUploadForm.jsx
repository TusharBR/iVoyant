    import React, { useState } from "react";
    import Tesseract from "tesseract.js";
    import * as pdfjs from "pdfjs-dist/build/pdf"; 
    import "pdfjs-dist/build/pdf.worker.entry"; // Ensure worker is properly loaded

    const FileUploadForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const extractTextFromImage = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
        const { data } = await Tesseract.recognize(reader.result, "eng");
        parseExtractedText(data.text);
        };
    };

    const extractTextFromPDF = async (file) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async () => {
        const pdf = await pdfjs.getDocument({ data: reader.result }).promise;
        let extractedText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            extractedText += textContent.items.map((item) => item.str).join(" ");
        }
        parseExtractedText(extractedText);
        };
    };

    const parseExtractedText = (text) => {
        const nameMatch = text.match(/Name:\s*(.*)/i);
        const phoneMatch = text.match(/Phone:\s*(\d{10})/i);
        const emailMatch = text.match(/Email:\s*([\w.-]+@[\w.-]+)/i);
        setFormData({
        name: nameMatch ? nameMatch[1] : "",
        phone: phoneMatch ? phoneMatch[1] : "",
        email: emailMatch ? emailMatch[1] : "",
        });
    };

    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
        if (file.type === "application/pdf") {
            extractTextFromPDF(file);
        } else if (file.type.startsWith("image/")) {
            extractTextFromImage(file);
        } else {
            alert("Unsupported file type. Please upload an image or PDF.");
        }
        }
    };

    return (
        <div className="form-container">
        <h2>Upload Driving License</h2>
        <input type="file" accept="image/*, application/pdf" onChange={handleFileUpload} />
        <form>
            <label>Name:</label>
            <input type="text" value={formData.name} readOnly />

            <label>Phone Number:</label>
            <input type="text" value={formData.phone} readOnly />

            <label>Email:</label>
            <input type="text" value={formData.email} readOnly />
        </form>
        </div>
    );
    };

    export default FileUploadForm;
