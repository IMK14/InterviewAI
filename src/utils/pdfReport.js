import { jsPDF } from "jspdf";

export function generateInterviewReport(data) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("InterviewAI Report", 20, y);

  y += 12;

  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleString()}`, 20, y);

  y += 10;
  doc.text(`Overall Score: ${data.score}%`, 20, y);

  y += 15;

  doc.setFontSize(16);
  doc.text("Interview Summary", 20, y);

  y += 10;

  doc.setFontSize(12);

  data.evaluations.forEach((item, index) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    doc.text(`Question ${index + 1}`, 20, y);

    y += 8;

    doc.text(
      doc.splitTextToSize(item.question, 170),
      25,
      y
    );

    y += 15;

    doc.text("Your Answer:", 20, y);

    y += 8;

    doc.text(
      doc.splitTextToSize(item.userAnswer || "No Answer", 170),
      25,
      y
    );

    y += 15;

    doc.text(`Score: ${item.score}/${item.maxMarks}`, 20, y);

    y += 12;
  });

  doc.save("InterviewAI_Report.pdf");
}