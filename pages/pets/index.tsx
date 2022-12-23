import PetItem from 'components/Pet';
import { Pet } from 'model/Pet';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import styles from 'styles/PetPage.module.css';

export interface IUserListPageProps {
}

export const getServerSideProps: GetServerSideProps = async () => {
    const resp = await fetch('https://63a2ab46471b38b206f8b098.mockapi.io/api/v1/users');
    const pets = await resp.json();

    return {
        props: {
            pets
        }
    }
}

export default function UserListPage({ pets }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Pets Page</title>
            </Head>
            <div className={styles.container}>
                {pets.map((pet: Pet) => <PetItem pet={pet} key={pet.id} />)}
            </div>
        </>
    );
}
