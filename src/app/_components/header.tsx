'use client';

import { startViewTransition } from '@/lib/startViewTransition';
import { useViewTransitionsRouter } from '@/lib/useViewTransitionsRouter';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const onClick = () => startViewTransition(() => router.push('/'));

  return (
    <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center'>
      <button onClick={onClick} className='hover:underline'>
        Blog
      </button>
      .
    </h2>
  );
};

export default Header;
