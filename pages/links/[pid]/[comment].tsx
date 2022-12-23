import { useRouter } from 'next/router';
import * as React from 'react';

export interface ICommentPageProps {
}

export default function CommentPage(props: ICommentPageProps) {
  const router = useRouter();
  const { pid, comment } = router.query;
  return (
    <div>
      <p>link {pid} -- comment {comment}</p>
    </div>
  );
}
