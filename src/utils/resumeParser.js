import * as pdfjsLib from "pdfjs-dist";

// Configure the PDF worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export async function extractResumeText(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    let fullText = "";

    for (let page = 1; page <= pdf.numPages; page++) {
      const currentPage = await pdf.getPage(page);

      const textContent = await currentPage.getTextContent();

      const pageText = textContent.items
        .map((item) => item.str)
        .join(" ");

      fullText += pageText + " ";
    }

    return fullText;
  } catch (error) {
    console.error("Resume Parser Error:", error);
    return "";
  }
}