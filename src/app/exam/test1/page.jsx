'use client';

import Loading from '@/app/loading';
import { Button, Typography } from 'antd';
import React, { useState, useEffect } from 'react';

const { Text } = Typography;

const Page = () => {
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [activeTabKey, setActiveTabKey] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://jlpt.mazii.net/api/jlpt/667549917566ad2c88b909e7`);
                const data = await res.json();
                setQuiz(data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAnswerChange = (event, partIndex, questionIndex, subQuestionIndex, subQuestion, correctAnswerIndex) => {
        const value = event.target.value;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [`question-${partIndex}-${questionIndex}-${subQuestionIndex}`]: {
                question: subQuestion?.question,
                userAnswer: value,
                correctAnswer: subQuestion?.answers[correctAnswerIndex],
            }
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted answers:', answers);

        // Example logic to check answers
        let correctCount = 0;
        Object.values(answers).forEach((answer) => {
            if (answer.userAnswer === answer.correctAnswer) {
                correctCount++;
            }
        });
        console.log(`Correct answers: ${correctCount}`);

        // Add your submission logic here, e.g., sending answers to a server
    };

    if (!quiz) {
        return <Loading />;
    }

    const tabData = quiz[0]?.parts;

    return (
        <div style={{ width: '95%', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
                {tabData?.map((item, index) => (
                    <Button
                        key={index}
                        type={activeTabKey === index ? 'primary' : 'dashed'}
                        onClick={() => setActiveTabKey(index)}
                        style={{ marginRight: '10px', marginBottom: '10px' }}
                    >
                        {item?.name}
                    </Button>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                {tabData && tabData[activeTabKey]?.content?.map((question, qIndex) =>
                    question?.questions?.map((mainQuestion, mainQuestionIndex) =>
                        mainQuestion?.sub_question?.map((subQuestion, subQuestionIndex) => (
                            <div key={`question-${qIndex}-${mainQuestionIndex}-${subQuestionIndex}`} style={{ marginBottom: '20px' }}>
                                <p style={{ color: '#4096FF', margin: '10px', fontWeight: '700' }}>{subQuestion?.question}</p>
                                {subQuestion?.answers?.map((answer, answerIndex) => (
                                    <div key={`answer-${qIndex}-${mainQuestionIndex}-${subQuestionIndex}-${answerIndex}`}>
                                        <input
                                            style={{ margin: '5px 20px' }}
                                            type="radio"
                                            id={`answer-${qIndex}-${mainQuestionIndex}-${subQuestionIndex}-${answerIndex}`}
                                            name={`question-${qIndex}-${mainQuestionIndex}-${subQuestionIndex}`}
                                            value={answer}
                                            onChange={(e) => handleAnswerChange(e, qIndex, mainQuestionIndex, subQuestionIndex, subQuestion, subQuestion?.correct_answer)}
                                        />
                                        <label htmlFor={`answer-${qIndex}-${mainQuestionIndex}-${subQuestionIndex}-${answerIndex}`}>{answer}</label>
                                    </div>
                                ))}
                            </div>
                        ))
                    )
                )}
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Button type="primary" htmlType="submit" style={{ padding: '10px 20px' }}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Page;
