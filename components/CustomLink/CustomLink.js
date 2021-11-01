import { Option } from "./styles";

import { useRouter } from 'next/router';

import Link from 'next/link';

export const CustomLink = ({ children, route }) => {
    const router = useRouter();

    return (
        <Option active={router.pathname === route}>
            <Link href={route}>
                <span>
                    {children}
                </span>
            </Link>
        </Option>
    );
}