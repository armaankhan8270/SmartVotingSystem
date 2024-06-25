from flask import Flask, request, jsonify
import numpy as np
from keras.preprocessing import image
from keras.applications.resnet50 import ResNet50, preprocess_input
from scipy.spatial.distance import cosine

app = Flask(__name__)

# Load pre-trained ResNet50 model

model = ResNet50(weights='path/to/resnet50_weights_tf_dim_ordering_tf_kernels_notop.h5', include_top=False, pooling='avg')


# Function to preprocess image
def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)
    return img

@app.route('/api/compare-images', methods=['POST'])
def compare_images():
    # Check if two images are provided in the request
    if 'image1' not in request.files or 'image2' not in request.files:
        return jsonify({'error': 'Two images are required'}), 400

    # Get the images from the request
    image1 = request.files['image1']
    image2 = request.files['image2']

    # Preprocess images
    img1 = preprocess_image(image1)
    img2 = preprocess_image(image2)

    # Get feature representations
    feat1 = model.predict(img1).flatten()
    feat2 = model.predict(img2).flatten()

    # Calculate cosine similarity
    similarity_score = 1 - cosine(feat1, feat2)

    return jsonify({'similarity_score': similarity_score})

if __name__ == '__main__':
    app.run(debug=True)
