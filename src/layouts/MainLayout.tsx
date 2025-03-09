
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 pb-20 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
