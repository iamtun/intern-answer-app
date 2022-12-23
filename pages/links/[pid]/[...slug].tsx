import { useRouter } from 'next/router';
import * as React from 'react';

export interface ISlugPageProps {
}

export default function SlugPage(props: ISlugPageProps) {
    const router = useRouter();
    const { slug } = router.query;
    const slugs = slug as string[];

    console.log(slug);
    
    return (
        <div>
            <p>Slug page: {slugs?.map((sl:string) => sl + '_')}</p>
        </div>
    );
}
