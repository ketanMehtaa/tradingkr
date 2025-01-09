import { Metadata } from 'next';
import ShareButtons from '../share';

export const metadata: Metadata = {
  title: 'Share Market News',
  description: 'Latest news and updates from the share market',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-screen-md m-4">
      {/* <h1 className="text-3xl font-bold mb-6">Share Market News</h1> */}
      {children}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2  p-4 rounded-lg  z-50">
        <ShareButtons />
      </div>
    </div>
  );
}
