import * as React from 'react';
import { CommentOutlined } from '@ant-design/icons';
import { Question } from '../../../model/Question';
import styles from './Item.module.css';
import Link from 'next/link';

export interface RQItemProps {
    question: Question;
}

export default function RQItem({ question }: RQItemProps) {
    return (
        <div className={styles.container}>
            <Link href={`/questions/${question.id}`}>
                <p>{question.title}</p>
            </Link>
            {question.answer_count > 0 ? <span><CommentOutlined size={24} /> {question.answer_count} </span> : null}
        </div>
    );
}
