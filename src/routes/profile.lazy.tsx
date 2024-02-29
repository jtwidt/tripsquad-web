import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});

function Profile() {
  return <div className='p-2'>Hello from Profile!</div>;
}
