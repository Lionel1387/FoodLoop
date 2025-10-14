import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export function Navbar({ currentPage, onNavigate, isAuthenticated, onLogout }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const publicLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Cómo funciona', page: 'how-it-works' },
    { name: 'Nosotros', page: 'about' },
    { name: 'Restaurantes', page: 'restaurants' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src="/logo.png" alt="Foodloop" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {!isAuthenticated && publicLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`transition-colors ${
                  currentPage === link.page
                    ? 'text-[#FDB940]'
                    : 'text-gray-700 hover:text-[#FDB940]'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Panel Restaurante</span>
                <Button onClick={onLogout} variant="outline">
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Button onClick={() => onNavigate('login')} variant="outline">
                  Iniciar sesión
                </Button>
                <Button onClick={() => onNavigate('register')} className="bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a]">
                  Registrar restaurante
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {!isAuthenticated && publicLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 ${
                  currentPage === link.page
                    ? 'text-[#FDB940]'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {isAuthenticated ? (
              <>
                <div className="py-2 text-gray-600">Panel Restaurante</div>
                <Button onClick={onLogout} variant="outline" className="w-full">
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={() => {
                    onNavigate('login');
                    setIsMobileMenuOpen(false);
                  }} 
                  variant="outline" 
                  className="w-full"
                >
                  Iniciar sesión
                </Button>
                <Button 
                  onClick={() => {
                    onNavigate('register');
                    setIsMobileMenuOpen(false);
                  }} 
                  className="w-full bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a]"
                >
                  Registrar restaurante
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
