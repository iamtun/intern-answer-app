import { useEffect, useState, lazy, Suspense } from 'react';

import styles from '../../styles/RelatedQuestion.module.css';
import { Question } from '../../model/Question';
import RQItem from './Item';
import { getAllRelatedQuestions } from 'services/questionService';

export interface IRelatedQuestionProps {
  question: Question;
}

export default function RelatedQuestion({ question }: IRelatedQuestionProps) {
  const [questions, setQuestions] = useState([]);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const _questions = getAllRelatedQuestions(question.id)
;
      _questions.then(questions => {
        setQuestions(questions.data.list);
        setPending(1);
      });
    }, 3000);
  }, [question.id]);

  useEffect(() => {
    // set new question when change id
    setQuestions([]);
    setPending(0);
  }, [question.id]);

  return (
    <div className={styles.body}>
      <h3 className={styles.title}>Related Questions</h3>
      <div className={styles.container}>

        <div className={styles.scroll_questions}>
          {pending === 1 ? questions.map((_question: Question, index: number) => <RQItem question={_question} key={question.id + index} />) : <span>loading ...</span>}
        </div>
      </div>
    </div>
  );
}
