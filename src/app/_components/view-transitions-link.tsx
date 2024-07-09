import { useViewTransitionsRouter } from '@/lib/useViewTransitionsRouter';
import NextLink from 'next/link';

export const ViewTransitionsLink = ({
  href,
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  const router = useViewTransitionsRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href.toString());
  };

  return <NextLink href={href} {...props} onClick={handleClick} />;
};
