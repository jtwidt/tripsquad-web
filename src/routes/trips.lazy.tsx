import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/trips')({
  component: Trips,
});

function Trips() {
  return <div className='p-2'>Hello from Trips!</div>;
}
