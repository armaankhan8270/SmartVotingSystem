import cv2

# Load the pre-trained facial landmark detector
detector = cv2.dnn.readNetFromCaffe("shape_predictor_68_face_landmarks.caffemodel")

def compare_faces(image1_path, image2_path):
  # Load images
  image1 = cv2.imread(image1_path)
  image2 = cv2.imread(image2_path)

  # Convert to grayscale for better landmark detection
  gray1 = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
  gray2 = cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)

  # Detect faces in both images
  rects1 = detector.detectMultiScale(gray1, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
  rects2 = detector.detectMultiScale(gray2, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

  # Check if faces are detected in both images
  if len(rects1) == 0 or len(rects2) == 0:
    print("No face detected in one or both images.")
    return None

  # Assuming only one face detected in each image (modify if needed)
  x1, y1, w1, h1 = rects1[0]
  x2, y2, w2, h2 = rects2[0]

  # Extract face ROIs
  roi1 = gray1[y1:y1 + h1, x1:x1 + w1]
  roi2 = gray2[y2:y2 + h2, x2:x2 + w2]

  # Detect landmarks on each ROI
  shape1 = detector.predict(roi1)
  shape2 = detector.predict(roi2)

  # Convert landmark points to NumPy arrays for easier calculations
  landmarks1 = np.array([(p.x, p.y) for p in shape1.parts()])
  landmarks2 = np.array([(p.x, p.y) for p in shape2.parts()])

  # Calculate Euclidean distance between corresponding landmarks (you can use other metrics too)
  total_distance = 0
  for i in range(len(landmarks1)):
    distance = np.linalg.norm(landmarks1[i] - landmarks2[i])
    total_distance += distance

  # Calculate average distance
  average_distance = total_distance / len(landmarks1)

  # Higher average distance indicates less similarity (adjust threshold as needed)
  similarity = 1 / (1 + average_distance)
  print(f"Similarity Score: {similarity:.2f}")
  return similarity

# Example usage
image1_path = "./1.png"
image2_path = "./2.png"

similarity_score = compare_faces(image1_path, image2_path)

# Optional: Display images with landmarks (if desired)
# ... (code to draw landmarks on images using cv2.circle)
# ... (code to display images)
