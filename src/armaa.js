import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import cv from "opencv.js";

const ImageComparison = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [similarity, setSimilarity] = useState(null);

  useEffect(() => {
    return () => {
      // Clean up images when the component is unmounted
      if (image1) URL.revokeObjectURL(image1);
      if (image2) URL.revokeObjectURL(image2);
    };
  }, [image1, image2]);

  const handleDrop = (acceptedFiles, setImage) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const compareImages = () => {
    if (!image1 || !image2) {
      alert("Please upload both images.");
      return;
    }

    const img1 = cv.imread(document.getElementById("img1"));
    const img2 = cv.imread(document.getElementById("img2"));

    const compareHist = (img1, img2) => {
      const hsv1 = new cv.Mat();
      const hsv2 = new cv.Mat();
      cv.cvtColor(img1, hsv1, cv.COLOR_BGR2HSV);
      cv.cvtColor(img2, hsv2, cv.COLOR_BGR2HSV);

      const hist1 = new cv.Mat();
      const hist2 = new cv.Mat();
      const channels = [0];
      const histSize = [50];
      const ranges = [0, 256];
      cv.calcHist(hsv1, channels, new cv.Mat(), hist1, histSize, ranges);
      cv.calcHist(hsv2, channels, new cv.Mat(), hist2, histSize, ranges);

      cv.normalize(hist1, hist1, 0, 1, cv.NORM_MINMAX);
      cv.normalize(hist2, hist2, 0, 1, cv.NORM_MINMAX);

      const score = cv.compareHist(hist1, hist2, cv.HISTCMP_CORREL);
      return score;
    };

    const score = compareHist(img1, img2);
    setSimilarity(score);

    // Clean up OpenCV matrices
    img1.delete();
    img2.delete();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Image Comparison Tool</h2>
      <div className="flex flex-col md:flex-row mb-4">
        <Dropzone
          onDrop={(acceptedFiles) => handleDrop(acceptedFiles, setImage1)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-400 p-4 m-2"
            >
              <input {...getInputProps()} />
              {image1 ? (
                <img
                  id="img1"
                  src={image1}
                  alt="Image 1"
                  className="max-w-xs mx-auto"
                />
              ) : (
                <p>Drag 'n' drop image 1 here, or click to select image</p>
              )}
            </div>
          )}
        </Dropzone>
        <Dropzone
          onDrop={(acceptedFiles) => handleDrop(acceptedFiles, setImage2)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-400 p-4 m-2"
            >
              <input {...getInputProps()} />
              {image2 ? (
                <img
                  id="img2"
                  src={image2}
                  alt="Image 2"
                  className="max-w-xs mx-auto"
                />
              ) : (
                <p>Drag 'n' drop image 2 here, or click to select image</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <button
        onClick={compareImages}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Compare Images
      </button>
      {similarity !== null && (
        <div className="mt-4">
          <h3 className="text-xl">Similarity Score: {similarity}</h3>
        </div>
      )}
    </div>
  );
};

export default ImageComparison;
