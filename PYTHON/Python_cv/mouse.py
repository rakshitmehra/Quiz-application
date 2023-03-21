import cv2
import mediapipe as mp
import pyautogui

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

# Initialize PyAutoGUI mouse control
pyautogui.FAILSAFE = False

# Initialize OpenCV video capture
cap = cv2.VideoCapture(0)

with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        success, image = cap.read()
        if not success:
            break

        # Flip the image horizontally for a more intuitive mirror view
        image = cv2.flip(image, 1)

        # Convert the image to RGB for processing by Mediapipe
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        # Process the image with Mediapipe Pose Estimation
        results = pose.process(image_rgb)

        # Extract the coordinates of the hand landmarks
        try:
            hand_landmarks = results.pose_landmarks.landmark[mp_pose.PoseLandmark.WRIST].x, results.pose_landmarks.landmark[mp_pose.PoseLandmark.WRIST].y
        except:
            hand_landmarks = None

        # Move the mouse cursor to the position of the hand
        if hand_landmarks is not None:
            x, y = hand_landmarks
            screen_width, screen_height = pyautogui.size()
            pyautogui.moveTo(x * screen_width, y * screen_height)

        # Perform left mouse click when the user makes a "click" gesture
        if results.pose_landmarks is not None and results.pose_landmarks.landmark[mp_pose.PoseLandmark.THUMB_TIP].y < results.pose_landmarks.landmark[mp_pose.PoseLandmark.INDEX_FINGER_TIP].y:
            pyautogui.mouseDown(button='left')

        # Release left mouse button when the user releases the "click" gesture
        elif pyautogui.mouseDown(button='left') and results.pose_landmarks is not None and results.pose_landmarks.landmark[mp_pose.PoseLandmark.THUMB_TIP].y >= results.pose_landmarks.landmark[mp_pose.PoseLandmark.INDEX_FINGER_TIP].y:
            pyautogui.mouseUp(button='left')

        # Perform right mouse click when the user makes a "pinch" gesture
        elif results.pose_landmarks is not None and results.pose_landmarks.landmark[mp_pose.PoseLandmark.THUMB_TIP].x < results.pose_landmarks.landmark[mp_pose.PoseLandmark.WRIST].x and results.pose_landmarks.landmark[mp_pose.PoseLandmark.INDEX_FINGER_TIP].x > results.pose_landmarks.landmark[mp_pose.PoseLandmark.WRIST].x:
            pyautogui.mouseDown(button='right')

        # Release right mouse button when the user releases the "pinch" gesture
        elif pyautogui.mouseDown(button='right') and results.pose_landmarks is not None and results.pose_landmarks.landmark[mp_pose.PoseLandmark.THUMB_TIP].x >= results.pose_landmarks.landmark[mp_pose.PoseLandmark.WRIST].x or results.pose_landmarks.landmark[mp_pose.PoseLandmark.INDEX_FINGER_TIP].x <= results.pose_landmarks.landmark[mp_pose.PoseLandmark.WRIST].x:
            pyautogui.mouseUp(button='right')
