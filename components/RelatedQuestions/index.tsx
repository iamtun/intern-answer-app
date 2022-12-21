import { useEffect, useState, lazy, Suspense } from 'react';


import styles from '../../styles/RelatedQuestion.module.css';
import { Question } from '../../model/Question';
import RQItem from './Item';

export interface IRelatedQuestionProps {
  question: Question;
}

export default function RelatedQuestion({ question }: IRelatedQuestionProps) {
  const [questions, setQuestions] = useState([]);

  console.log(questions);
  
  useEffect(() => {
    const _questions = fetch(`${process.env.API_URI_PROXY}/question/similar/tag?question_id=${question.id}`)
      .then(resp => resp)
      .then(questions => questions.json());

    _questions.then(questions => {
      setQuestions(questions.data.list);
    });
  }, [question.id]);

  return (
    <div className={styles.body}>
      <h3 className={styles.title}>Related Questions</h3>
      <div className={styles.container}>

        <div className={styles.scroll_questions}>
          {questions.length > 0 ? questions.map((_question: Question, index: number) => <RQItem question={_question} key={question.id + index} />) : null}
        </div>
      </div>
    </div>
  );
}
