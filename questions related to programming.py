import streamlit as st
import hashlib
import random

questions = [
    {
        "question": "What is the output of the following code: print(2+3*4)",
        "answer_options": ["14", "20", "error", "23"],
        "correct_answer_index": 1
    },
    {
        "question": "What is the data type of the variable x in the following code: x = 'hello world'",
        "answer_options": ["int", "float", "string", "list"],
        "correct_answer_index": 2
    },
    {
        "question": "What is the output of the following code: print('hello' + 'world')",
        "answer_options": ["'helloworld'", "'hello world'", "'hello+world'", "error"],
        "correct_answer_index": 0
    },
    {
        "question": "What is the output of the following code: print(4**3)",
        "answer_options": ["64", "12", "81", "48"],
        "correct_answer_index": 0
    },
    {
    	"question": "What is the output of the following code: x = [1, 2, 3]; y = x; y.append(4); print(x)",
    	"answer_options": [[1, 2, 3], [1, 2, 3, 4], [2, 3, 4], "error"],
    	"correct_answer_index": 1
    },
    {
        "question": "What is the the structure of code ",
        "answer_options": ["Function","Algorithm","Variable","Syntax"],
        "correct_answer_index": 3 
    },
    {
        "question": "a container for storing data",
        "answer_options": ["Syntax","Algorithm","Variable","Object"],
        "correct_answer_index": 2
    },
    {
        "question": "a set of instructions for solving a problem",
        "answer_options": ["Merge","Responsive","Database","Algorithm"],
        "correct_answer_index": 3
    },
    {
        "question": "a block of code that performs a specific task",
        "answer_options": ["Testing","Function","Loop","Documentation"],
        "correct_answer_index": 1
    },
    {
        "question": "a control structure for repeating code",
        "answer_options": ["Loop","Community","Object","Testing"],
        "correct_answer_index": 0
    },
    {
        "question": "the process of finding and fixing errors",
        "answer_options": ["Responsive","Debugging","Documentation","CLI"],
        "correct_answer_index": 1
    },
    {
        "question": "an instance of a class",
        "answer_options": ["Scalable","DevOps","Object","Loop"],
        "correct_answer_index": 2
    },
    {
        "question": "a set of methods and properties that define an object's behavior",
        "answer_options": ["Scalable","Responsive","Documentation","Interface"],
        "correct_answer_index": 3
    },
    {
        "question": "a program that translates code into machine language",
        "answer_options": ["Merge","Compiler","Documentation","SQL"],
        "correct_answer_index": 1
    },
    {
        "question": "a collection of pre-written code for common tasks",
        "answer_options": ["Community","Database","Library","CLI"],
        "correct_answer_index": 2
    },
    {
        "question": "a set of protocols and tools for building software applications",
        "answer_options": ["API","Loop","Object","Testing"],
        "correct_answer_index": 0
    },
    {
        "question": "a set of pre-written code for building a specific type of application",
        "answer_options": ["Deployment","Database","SQL","Framework"],
        "correct_answer_index": 3
    },
    {
        "question": "a structured collection of data",
        "answer_options": ["Community","Database","Documentation","Merge"],
        "correct_answer_index": 1
    },
    {
        "question": "a language used for managing databases",
        "answer_options": ["DevOps","Testing","SQL","Interface"],
        "correct_answer_index": 2
    },
    {
        "question": "the part of an application that handles data processing and storage",
        "answer_options": ["Interface","Object","Backend","CLI"],
        "correct_answer_index": 2
    },
    {
        "question": "the part of an application that handles user interface and interaction",
        "answer_options": ["Frontend","Responsive","Object","Merge"],
        "correct_answer_index": 0
    },
    {
        "question": "the ability of an application to adjust to different screen sizes and devices",
        "answer_options": ["Community","Testing","Responsive","Documentation"],
        "correct_answer_index": 2
    },
    {
        "question": " the ability of an application to handle increasing amounts of traffic and data",
        "answer_options": ["DevOps","CLI","Community","Scalable"],
        "correct_answer_index": 3
    },
    {
        "question": "the measures taken to protect an application from unauthorized access and data breaches",
        "answer_options": ["Deployment","Security","Loop","Responsive"],
        "correct_answer_index": 1
    },
    {
        "question": "the process of making an application available for use",
        "answer_options": ["Database","CLI","Deployment","Testing"],
        "correct_answer_index": 2
    },
    {
        "question": "the practice of tracking and managing changes to code",
        "answer_options": ["CLI","Merge","Interface","Version Control"],
        "correct_answer_index": 3
    },
    {
        "question": "a popular version control system",
        "answer_options": ["Git","Testing","SQL","Object"],
        "correct_answer_index": 0
    },
    {
        "question": " a central location for storing and managing code",
        "answer_options": ["Deployment","Interface","Repository","SQL"],
        "correct_answer_index": 2
    },
    {
        "question": "a separate line of development in a code repository",
        "answer_options": ["Community","SQL","Merge","Branch"],
        "correct_answer_index": 3
    },
    {
        "question": "the process of combining changes from different branches",
        "answer_options": ["Community","Merge","Scalable","Responsive"],
        "correct_answer_index": 1
    },
    {
        "question": "an integrated development environment that provides tools for coding and debugging",
        "answer_options": ["IDE","Deployment","DevOps","SQL"],
        "correct_answer_index": 0
    },

    # Add more questions here...
]

# Define a function to display a single question and its answer options
def display_question(index, question):
    st.write(f"**{index}. {question['question']}**")
    chosen_answer = st.selectbox("Select your answer", question["answer_options"])
    return chosen_answer == question["answer_options"][question["correct_answer_index"]]

# Define a function to shuffle the questions and store them in session state
def get_shuffled_questions():
    code = open(__file__).read().encode()
    hasher = hashlib.sha256(code)
    hash_value = hasher.hexdigest()
    if "questions" not in st.session_state or st.session_state.hash != hash_value:
        st.session_state.questions = random.sample(questions, len(questions))
        st.session_state.hash = hash_value
    return st.session_state.questions

# Create a Streamlit app to display the questions and record the user's answers
st.title("Programming Quiz")

shuffled_questions = get_shuffled_questions()

num_correct = 0
for i, question in enumerate(shuffled_questions):
    if display_question(i+1, question):
        num_correct += 1

if st.button("Check answers"):
    num_questions = len(shuffled_questions)
    st.write(f"You answered {num_correct} out of {num_questions} questions correctly.")
    percent_correct = 100.0 * num_correct / num_questions
    st.write(f"Your score is {percent_correct:.1f}%.")

