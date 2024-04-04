// import * as tf from "@tensorflow/tfjs";

// // Define Siamese Network Architecture
// function createSiameseNetwork(inputShape) {
//   const input = tf.input({ shape: inputShape });

//   // Shared Convolutional Layers
//   const conv1 = tf.layers
//     .conv2d({ filters: 32, kernelSize: 3, activation: "relu" })
//     .apply(input);
//   const conv2 = tf.layers
//     .conv2d({ filters: 64, kernelSize: 3, activation: "relu" })
//     .apply(conv1);
//   const conv3 = tf.layers
//     .conv2d({ filters: 128, kernelSize: 3, activation: "relu" })
//     .apply(conv2);
//   const flatten = tf.layers.flatten().apply(conv3);

//   // Shared Dense Layers
//   const dense1 = tf.layers
//     .dense({ units: 128, activation: "relu" })
//     .apply(flatten);
//   const dropout = tf.layers.dropout({ rate: 0.5 }).apply(dense1);
//   const output = tf.layers
//     .dense({ units: 64, activation: "relu" })
//     .apply(dropout);

//   return tf.model({ inputs: input, outputs: output });
// }

// // Create Siamese Network
// const inputShape = [64, 64, 3]; // Adjust input shape as per your image dimensions
// const siameseNetwork = createSiameseNetwork(inputShape);

// // Compile Siamese Network
// const optimizer = tf.train.adam();
// siameseNetwork.compile({ optimizer: optimizer, loss: "meanSquaredError" });

// // Train Siamese Network (assuming you have training data X_train, y_train)
// const epochs = 10;
// const batchSize = 32;
// await siameseNetwork.fit(X_train, y_train, {
//   epochs: epochs,
//   batchSize: batchSize,
// });

// // Evaluate Siamese Network (assuming you have test data X_test, y_test)
// const evalResult = siameseNetwork.evaluate(X_test, y_test);
// console.log("Evaluation Loss:", evalResult[0]);

// // Use the trained model for inference
// const result = siameseNetwork.predict(inputData);
