import { Pet } from 'model/Pet';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import styles from './Pet.module.css';

export interface IPetProps {
    pet: Pet
}

export default function PetItem({ pet }: IPetProps) {
    return (
        <div>
            <Link href={`/pets/${pet.id}`}>
                <Image src={pet.avatar} alt={pet.name} width={450} height={500} loading="lazy" className={styles.image}/>
            </Link>
        </div>
    );
}
