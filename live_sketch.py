import cv2

# Function to sketch image
def sketch(image):
    # Convert image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Blur the image using Gaussian blur
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Detect edges using Canny edge detection
    edges = cv2.Canny(blurred, 1, 35)

    # Invert the edges to create a sketch effect
    edges_inv = 255 - edges

    return edges_inv

# Create a video capture object
cap = cv2.VideoCapture(0)

while True:
    # Read frame from video capture
    ret, frame = cap.read()

    # Get sketch image
    sketch_image = sketch(frame)

    # Display sketch image
    cv2.imshow('Live Sketch', sketch_image)

    # Exit if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        # Capture an image of the sketch and save to a file
        filename = 'sketch_output.jpg'
        cv2.imwrite(filename, sketch_image)
        print(f'Saved {filename} to disk.')
        break

# Release video capture and destroy all windows
cap.release()
cv2.destroyAllWindows()

