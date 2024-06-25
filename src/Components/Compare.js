// import React, { useRef, useEffect, useState } from "react";

// const Canvas = ({ width, height }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     // Set willReadFrequently attribute
//     canvas.setAttribute("willReadFrequently", "true");

//     // Your canvas initialization code here

//     return () => {
//       // Clean up code if needed
//     };
//   }, []);

//   return <canvas ref={canvasRef} width={width} height={height} />;
// };

// const ImageComparator = () => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [similarityScore, setSimilarityScore] = useState(null);

//   const handleImage1Change = (event) => {
//     setImage1(URL.createObjectURL(event.target.files[0]));
//   };

//   const handleImage2Change = (event) => {
//     setImage2(URL.createObjectURL(event.target.files[0]));
//   };

//   const compareImages = () => {
//     if (!image1 || !image2) {
//       console.error("Please select two images to compare.");
//       return;
//     }

//     const img1 = new Image();
//     img1.src = image1;

//     const img2 = new Image();
//     img2.src = image2;

//     img1.onload = () => {
//       img2.onload = () => {
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d");

//         canvas.width = img1.width;
//         canvas.height = img1.height;

//         context.drawImage(img1, 0, 0, img1.width, img1.height);
//         const imageData1 = context.getImageData(0, 0, img1.width, img1.height);

//         context.clearRect(0, 0, canvas.width, canvas.height);
//         canvas.width = img2.width;
//         canvas.height = img2.height;
//         context.drawImage(img2, 0, 0, img2.width, img2.height);
//         const imageData2 = context.getImageData(0, 0, img2.width, img2.height);

//         let diff = 0;
//         for (let i = 0; i < imageData1.data.length; i += 4) {
//           diff += Math.abs(imageData1.data[i] - imageData2.data[i]);
//         }

//         const totalPixels = img1.width * img1.height;
//         const similarity = 1 - diff / (totalPixels * 255 * 3);

//         setSimilarityScore(similarity.toFixed(2));
//       };
//     };
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImage1Change} />
//       <input type="file" accept="image/*" onChange={handleImage2Change} />
//       <button onClick={compareImages}>Compare Images</button>
//       {similarityScore && <div>Similarity Score: {similarityScore}</div>}
//       <Canvas width={300} height={200} />
//       {image1 && (
//         <div>
//           <img src={image1} alt="Image 1" />
//         </div>
//       )}
//       {image2 && (
//         <div>
//           <img src={image2} alt="Image 2" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageComparator;
