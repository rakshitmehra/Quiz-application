import streamlit as st

# Define the list of questions and answers
questions = [
    "Tell me about yourself?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to work for our company?",
    "Where do you see yourself in 5 years?",
]
answers = [
    "I'm a hardworking and dedicated person with a passion for [industry/field]. I have [relevant experience/education] and am excited about the opportunity to work with your team.",
    "Some of my key strengths include [relevant skills/qualities]. I've demonstrated these strengths in my previous roles, such as [example from previous job].",
    "One area I'm working to improve is [relevant weakness]. I'm actively addressing this by [specific action plan].",
    "I'm impressed with the company's mission and values, and believe my skills and experience align well with the needs of the role. I'm excited about the opportunity to contribute to the team and grow with the company.",
    "In five years, I see myself [relevant career goal], and I believe this role will help me achieve that. I'm excited about the opportunity to learn from and work with a talented team, and to contribute to the company's success along the way.",
]

# Add a new question and answer to the list
new_question = st.text_input("Add a new question:")
new_answer = st.text_input("Add the best answer:")
if st.button("Add Question"):
    questions.append(new_question)
    answers.append(new_answer)
    st.success("Question added!")

# Select a question and display the dropdown answers
selected_question = st.selectbox("Select a question:", questions)
selected_index = questions.index(selected_question)
selected_answer = st.selectbox("Select the best answer:", answers, index=selected_index)

# Display the selected answer
st.write("Best answer:")
st.write(selected_answer)
