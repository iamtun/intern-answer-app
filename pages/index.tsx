import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Question } from 'model/Question'
import styles from 'styles/Home.module.css'
import QuestionItem from 'components/Questions/Question'
import { getAllQuestions } from 'services/questionService'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const questions = await getAllQuestions();
    return {
      props: {
        questions: questions.data.list
      },
      revalidate: 20
    }
  } catch (error) {
    console.log('bug fetch data', error);
  }

  return {
    notFound: true
  }

}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const resp = await fetch(`${process.env.API_LINK}/question/page?page_size=20&page=1&order=newest`);
//   const questions = await resp.json();

//   return {
//     props: {
//       questions: questions.data.list
//     }
//   }
// }

export default function Home({ questions }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (<>
    <Head>
      <title>Home</title>
      <meta name="google-site-verification" content="QQY9vCUpQTTD7gyvIUtHApR79RzF5N4PgCMeZRDKAII" />
    </Head>
    <div className={styles.container}>
      {questions.map((question: Question) => <QuestionItem question={question} key={question.id} />)}
    </div>
  </>
  )
}


