import { lazy, Suspense, useState, useEffect } from 'react';
import { Answer } from '../../model/Answer';
import { Comment } from '../../model/Comment';

export interface IAnswerItemProps {
    answer: Answer
}

const CommentItem = lazy(() => import('../Comment'))

export default function AnswerItem({ answer }: IAnswerItemProps) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const _comments = fetch(`${process.env.API_URI_PROXY}/comment/page?object_id=${answer.id}`)
                .then(resp => resp)
                .then(comments => comments.json());

            _comments.then(comments => setComments(comments.data.list))
        }, 3000)
    }, [answer.id]);

    return (
        <div>
            <h4>{answer.content}</h4>
            {comments ? comments.map((comment: Comment) =>
                <CommentItem comment={comment} key={comment.comment_id} />) : null}
        </div>
    );
}
