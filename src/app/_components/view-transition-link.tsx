import { useViewTransitionRouter } from '@/lib/useViewTransitionRouter';
import NextLink from 'next/link';

export const ViewTransitionLink = ({
  href,
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  const router = useViewTransitionRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href.toString());
  };

  return <NextLink href={href} {...props} onClick={handleClick} />;
};
