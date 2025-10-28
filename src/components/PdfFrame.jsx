import React from "react";

const PdfFrame = ({ path, title = "PDF Viewer" }) => {
  return (
    <div className="w-full p-4 h-full min-h-0">
      <iframe
        src={path}
        title={title}
        className="w-full h-full rounded-xl shadow-lg border-0"
        style={{ minHeight: 0 }}
        allowFullScreen
      />
    </div>
  );
};

export default PdfFrame;