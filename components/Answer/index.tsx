import { lazy, Suspense, useState, useEffect } from 'react';
import { Answer } from '../../model/Answer';
import { Comment } from '../../model/Comment';
import CommentItem from '../Comment';

export interface IAnswerItemProps {
    answer: Answer
}


export default function AnswerItem({ answer }: IAnswerItemProps) {
    const [comments, setComments] = useState([]);
    const [pending, setPending] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            const _comments = fetch(`${process.env.API_URI_PROXY}/comment/page?object_id=${answer.id}`)
                .then(resp => resp)
                .then(comments => {
                    return comments.json();
                });

            _comments.then(comments => {
                setPending(1);
                setComments(comments.data.list);
            })
        }, 3000)
    }, [answer.id]);

    return (
        <div>
            <h4>{answer.content}</h4>
            {pending === 1 ? comments.map((comment: Comment) =>
                <CommentItem comment={comment} key={comment.comment_id} />) : <span>loading...</span>}
        </div>
    );
}
