import NotFound from '@/components/404';

export const metadata = {
  title: '404',
  description: 'Page Not Found',
};

export default function page() {
  return <NotFound />;
}
