
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Layout;
