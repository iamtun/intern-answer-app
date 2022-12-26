import PetItem from 'components/Pet';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Pet } from 'model/Pet';
import styles from 'styles/PetPage.module.css';
import { getAllPets } from 'services/petService';

export interface IUserListPageProps {
}

export const getServerSideProps: GetServerSideProps = async () => {

    const pets = await getAllPets();

    if (pets !== 'Not found') {
        return {
            props: {
                pets
            }
        }
    }
    return {
        notFound: true
    }
}

export default function UserListPage({ pets }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Pets Page</title>
                <meta property="description" name="description" content="thú cưng siêu cute, vui nhộn, hài hước" data-app="true" />
                <meta property='og:title' name='og:title' content='Pet Pages' />
                <meta property='og:description' name='og:description' content='thú cưng siêu cute, vui nhộn, hài hước' />
                <meta property='og:image' name='og:image' content='https://i.pinimg.com/564x/db/dd/ea/dbddeaed573f1c32aad87d6ad1dc3e3c.jpg' />
                <meta property="og:type" name="og:type" content="website" data-app="true"/>
                <meta property="og:url" name="og:url" content="https://your-answer.vercel.app/pets" data-app="true"></meta>
            </Head>
            <div className={styles.container}>
                {pets.map((pet: Pet) => <PetItem pet={pet} key={pet.id} />)}
            </div>
        </>
    );
}
