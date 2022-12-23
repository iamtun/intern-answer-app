import { useRouter } from 'next/router';
import * as React from 'react';

export interface IDetailLinkProps {
}

export default function DetailLink(props: IDetailLinkProps) {
    const router = useRouter();
    const { pid } = router.query;
    console.log(router.query);
    
    return (
        <div>
            <p>Link: {pid}</p>
        </div>
    );
}
