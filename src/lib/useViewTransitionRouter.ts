import { useRouter } from 'next/navigation';
import { startViewTransition } from './startViewTransition';

export const useViewTransitionRouter = () => {
  const router = useRouter();

  return {
    ...router,
    push: (href: string) => {
      startViewTransition(() => router.push(href));
    },
  };
};
