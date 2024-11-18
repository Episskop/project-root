import React, { useEffect, useState } from 'react';

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/polls/questions/')
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Вопросы из Django</h1>
            <ul>
                {questions.map(question => (
                    <li key={question.id}>{question.question_text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
