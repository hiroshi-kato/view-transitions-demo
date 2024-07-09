import { useRouter } from 'next/navigation';
import { startViewTransition } from './startViewTransition';

export const useViewTransitionsRouter = () => {
  const router = useRouter();

  return {
    ...router,
    push: (href: string) => {
      startViewTransition(() => router.push(href));
    },
  };
};
