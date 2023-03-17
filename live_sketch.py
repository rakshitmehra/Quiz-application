import cv2


def sketch(image):

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


    blurred = cv2.GaussianBlur(gray, (5, 5), 0)


    edges = cv2.Canny(blurred, 1, 35)


    edges_inv = 255 - edges

    return edges_inv


cap = cv2.VideoCapture(0)

while True:

    ret, frame = cap.read()


    sketch_image = sketch(frame)

    cv2.imshow('Live Sketch', sketch_image)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        filename = 'sketch_output.jpg'
        cv2.imwrite(filename, sketch_image)
        print(f'Saved {filename} to disk.')
        break


cap.release()
cv2.destroyAllWindows()

