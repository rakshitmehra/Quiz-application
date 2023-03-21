from tkinter import *
global answer


#GUI Part Starts
window = Tk()
window.title("QUIZ GAME")
window.configure(bg='#FFF687')
window.geometry('550x250')



#window 1
lb0= Label(window, text="WELCOME TO THE QUIZ GAME",font=('Times New Roman',20),bg='#FFF687')
lb0.grid(column=1, row=0)

lbl = Label(window, text="Description",font=('Times New Roman',14),bg='#FFF687')
lbl.grid(column=1, row=1)

lb2 = Label(window, text="This is description can be editted in the source code",font=('Times New Roman',12),bg='#FFF687')
lb2.grid(column=1, row=2)

lb3 = Label(window, text=" This quiz is based on bikes",font=('Times New Roman',12),bg='#FFF687')
lb3.grid(column=1, row=3)

def clicked():
    window.destroy() 
START = Button(window,text=" START ", command=clicked,bg='#FEB692',padx=5,pady=5)
START.grid(column=1, row=4)
window.mainloop()


#window 2
window2 = Tk()
window2.title("QUIZ GAME")
window2.configure(bg='#FFF687')
window2.geometry('550x250')

Quetion_1= Label(window2,text="What is the heart of the question?",font=('Times New Roman',20),bg='#FFF687')
Quetion_1.grid(column=1, row=3)

choice=StringVar()
choice.set("Choose")

des=Label(window2,text="Click the below dropdown",font=('Times New Roman',14),bg='#FFF687')
des.grid(column=1, row=4)

Choice_list=["Engine","Fuel injectior","Wheels","Brakes"]

answer1=choice.get()
def print_ans(answer1):
    lb1.configure(text="You have choosed "+answer1,font=('Times New Roman',14),bg='#FFF687')

option=OptionMenu(window2,choice,*Choice_list,command=print_ans)
option.configure(bg='#89CFF0',padx=8,pady=8)
option.grid(column=1, row=6)
lb1=Label(window2,text=" Your Answer"+answer1,font=('Times New Roman',14),bg='#FFF687')
lb1.grid(column=1, row=7)


def clicked():
    window2.destroy()
    
OK = Button(window2,text=" NEXT ", command=clicked,bg='#FEB692',padx=5,pady=5)
OK.grid(column=1, row=8)
window2.mainloop()


#window 3
window3 = Tk()
window3.title("QUIZ GAME")
window3.configure(bg='#FFF687')
window3.geometry('550x250')

Quetion_1= Label(window3,text="When was the motorcycle's layout established?",font=('Times New Roman',20),bg='#FFF687')
Quetion_1.grid(column=1, row=3)

choice=StringVar()
choice.set("Choose")

des=Label(window3,text="Click the below dropdown",font=('Times New Roman',14),bg='#FFF687')
des.grid(column=1, row=4)

Choice_list=["1895","1904","1914","1934"]

answer2=choice.get()
def print_ans(answer2):
    lb1.configure(text="You have choosed "+answer2,font=('Times New Roman',14),bg='#FFF687')
    
option=OptionMenu(window3,choice,*Choice_list,command=print_ans)
option.configure(bg='#89CFF0',padx=8,pady=8)
option.grid(column=1, row=6)
lb1=Label(window3,text=" Your Answer"+answer2,font=('Times New Roman',14),bg='#FFF687')
lb1.grid(column=1, row=7)


def clicked():
    window3.destroy() 
OK = Button(window3,text=" NEXT ", command=clicked,bg='#FEB692',padx=5,pady=5)
OK.grid(column=1, row=8)
window3.mainloop()



#window 4
window4 = Tk()
window4.title("QUIZ GAME")
window4.configure(bg='#FFF687')
window4.geometry('550x250')

Quetion_1= Label(window4,text="The rotational force of the crankshaft is transmitted to:",font=('Times New Roman',20),bg='#FFF687')
Quetion_1.grid(column=1, row=3)

choice=StringVar()
choice.set("Choose")

des=Label(window4,text="Click the below dropdown",font=('Times New Roman',14),bg='#FFF687')
des.grid(column=1, row=4)

Choice_list=["Engine","Front Wheel","Back Wheel","Chase"]

answer3=choice.get()
def print_ans(answer3):
    lb1.configure(text="You have choosed "+answer3,font=('Times New Roman',14),bg='#FFF687')
    
option=OptionMenu(window4,choice,*Choice_list,command=print_ans)
option.configure(bg='#89CFF0',padx=8,pady=8)
option.grid(column=1, row=6)
lb1=Label(window4,text=" Your Answer"+answer3,font=('Times New Roman',14),bg='#FFF687')
lb1.grid(column=1, row=7)

def clicked():
    window4.destroy() 
OK = Button(window4,text=" NEXT ", command=clicked,bg='#FEB692',padx=5,pady=5)
OK.grid(column=1, row=8)
c_ans="Back Wheel"
window4.mainloop()


#window 5
window5 = Tk()
window5.title("QUIZ GAME")
window5.configure(bg='#FFF687')
window5.geometry('500x250')

Quetion_1= Label(window5,text="Unwanted motion in the rear of the motorcycle is called:",font=('Times New Roman',20),bg='#FFF687')
Quetion_1.grid(column=1, row=3)

choice=StringVar()
choice.set("Choose")

des=Label(window5,text="Click the below dropdown",font=('Times New Roman',14),bg='#FFF687')
des.grid(column=1, row=4)

Choice_list=["Gear shaking","Shaft Jacking","Clutch Clunking","Puncture"]
answer4=choice.get()
def print_ans(answer4):
    lb1.configure(text="You have choosed "+answer4,font=('Times New Roman',14),bg='#FFF687')
    
option=OptionMenu(window5,choice,*Choice_list,command=print_ans)
option.configure(bg='#89CFF0',padx=8,pady=8)
option.grid(column=1, row=6)
lb1=Label(window5,text=" Your Answer"+answer4,font=('Times New Roman',14),bg='#FFF687')
lb1.grid(column=1, row=7)

def clicked():
    window5.destroy() 
OK = Button(window5,text=" NEXT ", command=clicked,bg='#FEB692',padx=5,pady=5)
OK.grid(column=1, row=8)
c_ans="Shaft Jacking"
window5.mainloop()


#window 6
window6 = Tk()
window6.title("QUIZ GAME")
window6.configure(bg='#FFF687')
window6.geometry('500x350')


lb0= Label(window6, text="FINAL ANSWERS",font=('Times New Roman',20),bg='#FFF687')
lb0.grid(column=1, row=0)

lbl = Label(window6, text="1) ENGINE",font=('Times New Roman',14),bg='#FFF687')
lbl.grid(column=1, row=1)

lb2 = Label(window6, text="2) 1914",font=('Times New Roman',12),bg='#FFF687')
lb2.grid(column=1, row=2)

lb3 = Label(window6, text="3) BACK WHEEL",font=('Times New Roman',12),bg='#FFF687')
lb3.grid(column=1, row=3)

lb4 = Label(window6, text="4) SHAFT JACKING",font=('Times New Roman',12),bg='#FFF687')
lb4.grid(column=1, row=4)


lb5 = Label(window6, text="THANKYOU",font=('Times New Roman',12),bg='#FFF687')
lb5.grid(column=1, row=5)

def clicked():
    window6.destroy()
Btn2= Button(window6, text="  EXIT  ", command=clicked)
Btn2.configure(bg='#89CFF0',padx=5,pady=5)
Btn2.grid(column=0, row=4)
window6.mainloop()


