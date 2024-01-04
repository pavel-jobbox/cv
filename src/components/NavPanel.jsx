import React from "react";

import Button from "./Button";

export default function NavPanel() {
  const downloadCvv = () => {
    const pdfFilePath = "../cv/opanasenko_pavlo.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfFilePath;
    downloadLink.download = "Opanasenko Pavlo.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="nav-panel">
      <div className="logo">
        <span>pvl</span>
      </div>
      <nav className="nav-list">
        <button className="nav-list__item">about me</button>
        <button className="nav-list__item">skill</button>
        <button className="nav-list__item">project</button>
        <button className="nav-list__item">contacts</button>
      </nav>
      <Button dw onClick={downloadCvv}>Resume</Button>
    </div>
  );
}
