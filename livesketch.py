import cv2

def sketch(image):
    # Convert image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Clean up image using Gaussian blur
    blurred_image = cv2.GaussianBlur(gray_image, (5, 5), 0)
    
    # Apply Canny edge detection algorithm to detect edges
    edges = cv2.Canny(blurred_image, 10, 70)
    
    # Invert the binary image
    _, thresholded = cv2.threshold(edges, 70, 255, cv2.THRESH_BINARY_INV)
    
    return thresholded

# Initialize webcam capture
cap = cv2.VideoCapture(0)

while True:
    # Read frame from webcam
    ret, frame = cap.read()
    
    # Call sketch function on the frame
    sketch_image = sketch(frame)
    
    # Display the resulting sketch
    cv2.imshow('Live Sketch', sketch_image)
    
    # Exit if 'q' is pressed
    if cv2.waitKey(1) == ord('q'):
        break

# Release webcam and close all windows
cap.release()
cv2.destroyAllWindows()
