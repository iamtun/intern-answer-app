import { Comment } from "model/Comment";
import styles from "./Comment.module.css";
export interface ICommentItemProps {
    comment: Comment;
}

export default function CommentItem({ comment }: ICommentItemProps) {
    return (
        <div className={styles.container}>
            <p className={styles.content}>{comment.original_text}</p>
            <span>{comment.username}</span> 
            <span>•</span>
            <span>{comment.created_at}</span>
        </div>
    );
}
