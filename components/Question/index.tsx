import * as React from 'react';
import { Question } from '../../model/Question';
import { LikeOutlined, CommentOutlined, EyeOutlined } from '@ant-design/icons';
import styles from '../../styles/Card.module.css'
import { useRouter } from 'next/router';

export interface QuestionProps {
    question: Question;
    isDetail?: Boolean;
}

export default function QuestionItem({ question, isDetail }: QuestionProps) {
    const router = useRouter();
    const handleClickQuestion = (id: string) => {
        router.push({ pathname: `/questions/${id}` });
    }

    return (
        <div className={styles.card_question} onClick={() => { isDetail ? null : handleClickQuestion(question.id) }}>
            <h4 className={styles.card_question_title}>{question.title}</h4>
            <p>{question.user_info.display_name}</p>
            <span>{question.create_time}</span>
            <div className={styles.icons}>
                <span><LikeOutlined size={24} /> {question.vote_count}</span>
                <span><CommentOutlined size={24} /> {question.answer_count}</span>
                <span><EyeOutlined size={24} /> {question.view_count} </span>
            </div>
        </div>
    );
}
