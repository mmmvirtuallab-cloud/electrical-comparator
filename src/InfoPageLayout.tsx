// File: src/InfoPageLayout.tsx

import React, { useState, useEffect } from "react";
import styles from "./InfoPage.module.css";
import { PageContent, Question } from "./types"; // <-- Import shared types

// Define the props for this component
interface InfoPageLayoutProps {
  pageKey: string;
  content: PageContent;
}

// Type for the 'answers' state
type AnswersState = {
  [key: string]: number; // e.g., { 'pre_q1': 0, 'pre_q2': 2 }
};

const InfoPageLayout = ({ pageKey, content }: InfoPageLayoutProps) => {
  const pageData = content[pageKey];

  // Add types to state hooks
  const [answers, setAnswers] = useState<AnswersState>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    setAnswers({});
    setIsSubmitted(false);
    setScore(null);
  }, [pageKey]);

  if (!pageData) {
    return (
      <div className={styles.infoPageContainer}>
        <h1>Content Not Found</h1>
        <p>Could not find content for key: {pageKey}</p>
      </div>
    );
  }

  // Find the MCQ section (this is safer with types)
  const mcqSection = pageData.sections.find((sec) => sec.type === "mcq");
  
  // Type-guard to ensure mcqSection is of type 'mcq' before accessing 'questions'
  const questions: Question[] = 
    mcqSection && mcqSection.type === "mcq" ? mcqSection.questions : [];

  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    if (!questions.length || !allQuestionsAnswered) return;

    let correctCount = 0;
    questions.forEach((q) => {
      // Use q.id which is guaranteed by our type
      if (answers[q.id] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.infoPageContainer}>
      <h1>{pageData.title}</h1>
      {pageData.sections.map((section, index) => (
        <React.Fragment key={index}>
          {/* Use type-guards for rendering sections */}
          {section.type === "paragraph" && <p>{section.text}</p>}
          {section.type === "heading" && section.level === 2 && (
             <h2>{section.text}</h2>
          )}
          {section.type === "list" && (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.type === "mcq" && questions.length > 0 && (
            <div className={styles.mcqContainer}>
              {questions.map((q, qIndex) => {
                const questionId = q.id; // Use the id from the question object
                const userAnswer = answers[questionId];
                const isCorrect = userAnswer === q.correctAnswerIndex;

                return (
                  <div key={questionId} className={styles.questionBlock}>
                    <p className={styles.questionText}>
                      <strong>{qIndex + 1}.</strong> {q.question}
                    </p>
                    <ul className={styles.optionsList}>
                      {q.options.map((option, optionIndex) => {
                        let optionClass = styles.optionItem;
                        if (isSubmitted) {
                          if (optionIndex === q.correctAnswerIndex) {
                            optionClass += ` ${styles.correct}`;
                          } else if (optionIndex === userAnswer) {
                            optionClass += ` ${styles.incorrect}`;
                          } else {
                            optionClass += ` ${styles.dimmed}`;
                          }
                        }

                        return (
                          <li key={optionIndex} className={optionClass}>
                            <label>
                              <input
                                type="radio"
                                name={`question_${questionId}`}
                                value={optionIndex}
                                checked={userAnswer === optionIndex}
                                onChange={() =>
                                  handleAnswerSelect(questionId, optionIndex)
                                }
                                disabled={isSubmitted}
                                className={styles.radioInput}
                              />
                              {option}
                              {isSubmitted &&
                                optionIndex === q.correctAnswerIndex && (
                                  <span className={styles.feedbackMark}> ✔</span>
                                )}
                              {isSubmitted &&
                                optionIndex === userAnswer &&
                                !isCorrect && (
                                  <span className={styles.feedbackMark}> ✖</span>
                                )}
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              {!isSubmitted && (
                <button
                  onClick={handleSubmit}
                  className={styles.submitButton}
                  disabled={!allQuestionsAnswered}
                >
                  Submit Answers
                </button>
              )}
              {isSubmitted && score !== null && (
                <div className={styles.scoreDisplay}>
                  <h3>
                    Your Score: {score} / {questions.length}
                  </h3>
                </div>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InfoPageLayout;