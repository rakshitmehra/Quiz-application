import pyautogui
import time
i=0
while True:
    i+=1
    time.sleep(0.005)
    pyautogui.typewrite('hlo')
    time.sleep(0.005)
    pyautogui.press('enter')
    if i==100000:
        break