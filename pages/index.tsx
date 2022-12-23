import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import QuestionItem from '../components/Question'
import { Question } from '../model/Question'
import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resp = await fetch(`${process.env.API_URI_PROXY}/question/page?page_size=20&page=1&order=newest`);
    const questions = await resp.json();
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
    </Head>
    <div className={styles.container}>
      {questions.map((question: Question) => <QuestionItem question={question} key={question.id} />)}
    </div>
  </>
  )
}


