# import required module
from gtts import gTTS
import os

# enter the text you want to convert to speech
text = input("Enter the text : ")

# create a text to speech object
tts = gTTS(text=text, lang='en')

# save the speech as a .mp3 file
tts.save("hello.mp3")

# play the speech using the default media player
os.system("hello.mp3")
