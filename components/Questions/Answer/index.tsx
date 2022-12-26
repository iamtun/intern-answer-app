
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Answer } from 'model/Answer';
import { Comment } from 'model/Comment';
import CommentItem from '../Comment';
import styles from './Answer.module.css';
export interface IAnswerItemProps {
    answer: Answer
}

// const CommentItem = dynamic(() => import('../Comment'), {
//     loading: () => <span>loading ....</span>,
//     ssr: false,
// });


export default function AnswerItem({ answer }: IAnswerItemProps) {
    const [comments, setComments] = useState([]);
    const [pending, setPending] = useState(0);

    useEffect(() => {
        const _comments = fetch(`${process.env.API_URI_PROXY}/comment/page?object_id=${answer.id}`)
            .then(resp => resp)
            .then(comments => {
                return comments.json();
            });

        _comments.then(comments => {
            setPending(1);
            setComments(comments.data.list);
        })
    }, [answer.id]);

    return (
        <div>
            <div className={styles.container}>
                <h4 className={styles.content}>{answer.content}</h4>
                <div className={styles.box_actions}>
                    <div className={styles.actions}>
                        <p className={styles.action_item}>Share</p>
                        <p className={styles.action_item}>Flag</p>
                        <p className={styles.action_item}>Edit</p>
                        <p className={styles.action_item}>Delete</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.avatar}>
                            <Image src="/images/user.png" alt='user' width={30} height={30} />
                        </div>
                        <div>
                            <p>{answer.user_info.username}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {pending === 1 ? comments.map((comment: Comment) =>
                    <CommentItem comment={comment} key={comment.comment_id} />) : <span>loading...</span>}
                {/* {
                    comments.map((comment: Comment) =>
                    <CommentItem comment={comment} key={comment.comment_id} />)
                } */}
            </div>
        </div>
    );
}
