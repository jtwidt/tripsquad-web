import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/settings')({
  component: Settings,
});

function Settings() {
  return <div className='p-2'>Hello from Settings!</div>;
}
