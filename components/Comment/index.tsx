import { Comment } from "../../model/Comment";

export interface ICommentItemProps {
    comment: Comment;
}

export default function CommentItem({ comment }: ICommentItemProps) {    
    return (
        <li>{comment.original_text}</li>
    );
}
