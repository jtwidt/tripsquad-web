import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/support')({
  component: Support,
});

function Support() {
  return <div className='p-2'>Hello from Support!</div>;
}
