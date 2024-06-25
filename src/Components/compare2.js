import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// Assuming TensorFlow.js is installed
import * as facemesh from "@mediapipe/face_mesh";
// import "@mediapipe/face_mesh/styles.css"; // MediaPipe styles for visualization (optional)
import { draw, fromPixels, fromPixelsAsync, toPixels } from "@tensorflow/tfjs";

const FaceLandmarkDetection = () => {
  const [video, setVideo] = useState(null);
  const [canvas, setCanvas] = useState(null);
  const [landmarks, setLandmarks] = useState(null);
  const faceMesh = new facemesh.FaceMesh({ maxNumFaces: 1 });
  useEffect(() => {
    const camera = navigator.mediaDevices.getUserMedia({ video: true });
    camera.then((stream) => {
      setVideo(stream);
    });

    const faceMesh = new facemesh.FaceMesh({ maxNumFaces: 1 });
    faceMesh.onResults = (results) => {
      if (results.multiFaceLandmarks) {
        setLandmarks(results.multiFaceLandmarks[0]);
      }
    };

    return () => {
      camera.then((stream) =>
        stream.getTracks().forEach((track) => track.stop())
      );
    };
  }, []);

  useEffect(() => {
    if (video && canvas) {
      const context = canvas.getContext("2d");
      const drawLandmarks = (landmarks) => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        landmarks.forEach((landmark) => {
          const [x, y] = landmark;
          context.beginPath();
          context.arc(x, y, 2, 0, 2 * Math.PI);
          context.fillStyle = "red";
          context.fill();
        });
      };

      const loop = async () => {
        const videoFrame = await tf.browser.toTensorVideoFrame(video);
        const predictions = await faceMesh.estimateFaces(videoFrame);
        if (predictions.multiFaceLandmarks) {
          drawLandmarks(predictions.multiFaceLandmarks[0]);
        }

        videoFrame.dispose();
        requestAnimationFrame(loop);
      };

      loop();
    }
  }, [video, canvas]);

  return (
    <div>
      <video
        ref={(ref) => setVideo(ref)}
        autoPlay
        muted
        width="640"
        height="480"
      />
      <canvas ref={(ref) => setCanvas(ref)} width="640" height="480" />
    </div>
  );
};

export default FaceLandmarkDetection;
