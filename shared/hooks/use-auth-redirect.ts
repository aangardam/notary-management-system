/* eslint-disable react-hooks/exhaustive-deps */

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUserStore } from '../store/user.store';

export const useAuthRedirect = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { lastSignIn } = useUserStore();

    const router = useRouter();
    // const originalPathname = usePathname();

    const haveToken = typeof window !== 'undefined' && !!localStorage.getItem('user-storage');
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (!haveToken) {
            router.replace('/login');
            return;
        }

        const lastSignInDate = lastSignIn ? new Date(lastSignIn) : null;
        const expirationDate = lastSignInDate
            ? new Date(lastSignInDate.getTime() + oneDayInMilliseconds)
            : null;

        if (!expirationDate || Date.now() > expirationDate.getTime()) {
            localStorage.removeItem('user-storage');
            router.replace('/login');
            return;
        }

        Promise.resolve().then(() => setIsLoading(false));
    }, [haveToken, lastSignIn, router]);

    return isLoading;
};
