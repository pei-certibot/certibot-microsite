import React from "react";

const PdfFrame = ({ path, title = "PDF Viewer" }) => {
  return (
    <div className="w-full p-4 h-full min-h-0">
      <iframe
        src={path}
        title={title}
        loading="lazy"
        className="w-full h-full rounded-xl shadow-lg border-0"
        allowFullScreen={true}
        allow="fullscreen">
      </iframe>
    </div>
  );
};

export default PdfFrame;