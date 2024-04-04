// import React, { useRef, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-backend-cpu";
// import "@tensorflow/tfjs-backend-webgl";
// import "@tensorflow/tfjs-backend-wasm";
// import { load } from "@tensorflow-models/mobilenet";
// import { string } from "@tensorflow/tfjs";

// const ImageComparisonPage = () => {
//   const fileInputRef1 = useRef(null);
//   const fileInputRef2 = useRef(null);
//   const [imageSrc1, setImageSrc1] = (useState < string) | (null > null);
//   const [imageSrc2, setImageSrc2] = (useState < string) | (null > null);
//   const [similarityScore, setSimilarityScore] =
//     (useState < string) | (null > null);

//   const loadModel = async () => {
//     const model = await load();
//     return model;
//   };

//   const preprocessImage = async (imageElement: HTMLImageElement) => {
//     const model = await loadModel();
//     const logits = tf.tidy(() => {
//       const tensor = tf.browser.fromPixels(imageElement).toFloat();
//       const resized = tf.image.resizeBilinear(tensor, [224, 224]);
//       const batched = resized.expandDims();
//       return model.infer(batched, true);
//     });
//     return logits.arraySync();
//   };

//   const compareImages = async () => {
//     if (!imageSrc1 || !imageSrc2) {
//       alert("Please upload both images.");
//       return;
//     }

//     const imageElement1 = document.createElement("img");
//     imageElement1.src = imageSrc1 || "";
//     const imageElement2 = document.createElement("img");
//     imageElement2.src = imageSrc2 || "";

//     const featureVector1 = await preprocessImage(imageElement1);
//     const featureVector2 = await preprocessImage(imageElement2);

//     const similarity = tf.losses
//       .cosineDistance(featureVector1, featureVector2)
//       .dataSync()[0];
//     setSimilarityScore((1 - similarity).toFixed(2) * 100 + "%");

//     tf.dispose([featureVector1, featureVector2]);
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="flex justify-center">
//         <div className="image-container">
//           <h2 className="text-center mb-4">First Image</h2>
//           <input
//             type="file"
//             accept="image/*"
//             className="mb-4"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) {
//                 const reader = new FileReader();
//                 reader.onload = (event) => {
//                   setImageSrc1(event.target?.result?.toString() || null);
//                 };
//                 reader.readAsDataURL(file);
//               }
//             }}
//             ref={fileInputRef1}
//             style={{ display: "none" }}
//           />
//           <div
//             className="border border-gray-400 border-dashed py-12 px-4 cursor-pointer"
//             onClick={() => fileInputRef1.current?.click()}
//           >
//             {imageSrc1 ? (
//               <img
//                 src={imageSrc1}
//                 alt="First Image"
//                 className="max-w-full h-auto mx-auto"
//               />
//             ) : (
//               <p className="text-gray-400 text-center">Click here to upload</p>
//             )}
//           </div>
//         </div>

//         <div className="image-container">
//           <h2 className="text-center mb-4">Second Image</h2>
//           <input
//             type="file"
//             accept="image/*"
//             className="mb-4"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) {
//                 const reader = new FileReader();
//                 reader.onload = (event) => {
//                   setImageSrc2(event.target?.result?.toString() || null);
//                 };
//                 reader.readAsDataURL(file);
//               }
//             }}
//             ref={fileInputRef2}
//             style={{ display: "none" }}
//           />
//           <div
//             className="border border-gray-400 border-dashed py-12 px-4 cursor-pointer"
//             onClick={() => fileInputRef2.current?.click()}
//           >
//             {imageSrc2 ? (
//               <img
//                 src={imageSrc2}
//                 alt="Second Image"
//                 className="max-w-full h-auto mx-auto"
//               />
//             ) : (
//               <p className="text-gray-400 text-center">Click here to upload</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-6">
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={compareImages}
//         >
//           Compare Images
//         </button>
//       </div>

//       {similarityScore && (
//         <div className="text-center mt-6">
//           <p>Similarity Score: {similarityScore}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageComparisonPage;
