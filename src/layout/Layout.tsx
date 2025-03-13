import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode
    className?: string
}

const Layout: React.FC<LayoutProps> = ({children, className}) => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black pt-60">
      <Header />
      <div className={className}>{children}</div>
      <div className="flex flex-col flex-1" />
      <Footer />
    </main>
  );
};

export default Layout;
