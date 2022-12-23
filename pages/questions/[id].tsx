import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import * as React from 'react';

import AnswerItem from '../../components/Answer';
import QuestionItem from '../../components/Question';
import RelatedQuestion from '../../components/RelatedQuestions';
import { Answer } from '../../model/Answer';
import styles from '../../styles/QuestionDetail.module.css';

export interface QuestionDetailProps {
}

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // request -> run SSR -> render -> change url + show page
  // await delay(5000);
  // console.log('delay 5s');

  const id = params?.id;

  const _question = fetch(`${process.env.API_URI_PROXY}/question/info?id=${id}`).then(resp => resp).then(question => question.json());
  const _answers = fetch(`${process.env.API_URI_PROXY}/answer/page?order=default&question_id=${id}&page=1&page_size=999`).then(resp => resp).then(answers => answers.json());

  const [question, answers] = await Promise.all([_question, _answers]);

  return {
    props: {
      question: question.data,
      answers: answers.data.list
    }
  }
}



export default function QuestionDetail({ question, answers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{question.title}</title>
      </Head>
      <div>
        <div className={styles.container}>
          <div className={styles.left_side}>
            <QuestionItem question={question} isDetail={true} />
            <br />
            <h3 className={styles.title_answers}>{answers.length} Answers</h3>
            {answers.map((answer: Answer) => <AnswerItem answer={answer} key={answer.id} />)}
          </div>
          <div className={styles.right_side}>
            <RelatedQuestion question={question} />
          </div>
        </div>
      </div>
    </>
  );
}
