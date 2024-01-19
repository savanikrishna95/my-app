import React from 'react'

export default function JavascriptDemo() {

    const obj = {
        "quiz": {
            "sport": {
                "q1": {
                    "question": "Which one is correct team name in NBA?",
                    "options": [
                        "New York Bulls",
                        "Los Angeles Kings",
                        "Golden State Warriros",
                        "Huston Rocket"
                    ],
                    "answer": "Huston Rocket"
                }
            },
            "maths": {
                "q1": {
                    "question": "5 + 7 = ?",
                    "options": [
                        "10",
                        "11",
                        "12",
                        "13"
                    ],
                    "answer": "12"
                },
                "q2": {
                    "question": "12 - 8 = ?",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "answer": "4"
                }
            }
        }
    };
    
const restructuredObj = Object.entries(obj.quiz).reduce((acc, [subject, questions]) => {
    acc[subject] = {}; // Initialize the subject

    Object.entries(questions).forEach(([questionKey, questionValue]) => {
        console.log(questionValue)
        acc[subject][questionKey] = questionValue;
    });

    return acc;
}, {});

const modifiedObj = {
    quiz: restructuredObj
};

console.log(modifiedObj);

  return (
    <div>JavascriptDemo</div>
  )
}
