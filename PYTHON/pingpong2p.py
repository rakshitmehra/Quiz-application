import turtle
import random

# Set up the screen
win = turtle.Screen()
win.title("A PING-PONG Game")
win.bgcolor('black')
win.setup(width=800, height=600)
win.tracer(0)

# Prompt user to start game
start_message = turtle.textinput("Start Game", "Press any key to start the game.")

# Create the left pad
pad_a = turtle.Turtle()
pad_a.speed(0)
pad_a.shape("square")
pad_a.color("white")
pad_a.shapesize(stretch_wid=5, stretch_len=1)
pad_a.penup()
pad_a.goto(-350, 0)

# Create the right pad
pad_b = turtle.Turtle()
pad_b.speed(0)
pad_b.shape("square")
pad_b.color("white")
pad_b.shapesize(stretch_wid=5, stretch_len=1)
pad_b.penup()
pad_b.goto(350, 0)

# Create the ball
ball = turtle.Turtle()
ball.speed(40)
ball.shape("circle")
ball.color("red")
ball.penup()
ball.goto(0, 0)
ball.dx = 0.4 * random.choice([1, -1])
ball.dy = 0.4 * random.choice([1, -1])

# Create the score board
score_a = 0
score_b = 0
score = turtle.Turtle()
score.speed(0)
score.color("white")
score.penup()
score.hideturtle()
score.goto(0, 260)
score.write("Player A: 0 Player B: 0", align="center", font=("Courier", 24, "bold"))

# Set up the functions to move the pads
def pad_a_up():
    y = pad_a.ycor()
    y += 30
    pad_a.sety(y)

def pad_a_down():
    y = pad_a.ycor()
    y -= 30
    pad_a.sety(y)

def pad_b_up():
    y = pad_b.ycor()
    y += 30
    pad_b.sety(y)

def pad_b_down():
    y = pad_b.ycor()
    y -= 30
    pad_b.sety(y)
    


# Set up the key bindings
win.listen()
win.onkeypress(pad_a_up, "w")
win.onkeypress(pad_a_down,"s")
win.onkeypress(pad_b_up, "Up")
win.onkeypress(pad_b_down, "Down")

# Game loop
while True:
    win.update()
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)
    
    if ball.ycor() > 290 :
        ball.sety(290)
        ball.dy *= -1
    
    if ball.ycor() < -290 :
        ball.sety(-290)
        ball.dy *= -1
    
    if ball.xcor() > 390 :
        score_a += 1
        ball.goto(0,0)
        ball.dx *= -1
        score.clear()
        score.write("Player A : "+ str(score_a) +" Player B : "+ str(score_b),align="center",font=("Courier",24,"normal"))
    
    if ball.xcor() < -390 :
        score_b += 1
        ball.goto(0,0)
        ball.dx *= -1
        score.clear()
        score.write("Player A : "+ str(score_a) +" Player B : "+ str(score_b),align="center",font=("Courier",24,"normal"))
    
    # Check for collision with the pads
    if (ball.xcor() > 340 and ball.xcor() < 350) and (ball.ycor() < pad_b.ycor() + 50 and ball.ycor() > pad_b.ycor() - 50):
    	ball.setx(340)
    	ball.dx *= -1
    
    if (ball.xcor() < -340 and ball.xcor() > -350) and (ball.ycor() < pad_a.ycor() + 50 and ball.ycor() > pad_a.ycor() - 50):
    	ball.setx(-340)
    	ball.dx *= -1

    

   

