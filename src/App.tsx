import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PublicHome } from './components/PublicHome';
import { RestaurantRegister } from './components/RestaurantRegister';
import { Login } from './components/Login';
import { RestaurantDashboard } from './components/RestaurantDashboard';
import { HowItWorks, About } from './components/PublicPages';
import { AllRestaurants } from './components/AllRestaurants';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'how-it-works' | 'about' | 'restaurants' | 'register' | 'login';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Si está autenticado, mostrar el dashboard de restaurante
  if (isAuthenticated) {
    return (
      <>
        <Navbar
          currentPage="dashboard"
          onNavigate={handleNavigate}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
        <RestaurantDashboard onLogout={handleLogout} />
        <Toaster position="top-right" />
      </>
    );
  }

  // Páginas públicas
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      
      <main className="flex-1">
        {currentPage === 'home' && <PublicHome onNavigate={handleNavigate} />}
        {currentPage === 'how-it-works' && <HowItWorks />}
        {currentPage === 'about' && <About />}
        {currentPage === 'restaurants' && <AllRestaurants />}
        {currentPage === 'register' && <RestaurantRegister onNavigate={handleNavigate} />}
        {currentPage === 'login' && <Login onLogin={handleLogin} />}
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
