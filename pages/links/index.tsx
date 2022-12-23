import Link from 'next/link';
import * as React from 'react';

export interface ILinkPageProps {
}

export default function LinkPage(props: ILinkPageProps) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/links/abc">Go to pages/post/[pid].tsx</Link>
                </li>
                <li>
                    <Link href="/links/abc?foo=bar">Also goes to pages/post/[pid].tsx</Link>
                </li>
                <li>
                    <Link href="/links/abc/a-comment">
                        Go to pages/post/[pid]/[comment].tsx
                    </Link>
                </li>
            </ul>
        </div>
    );
}
