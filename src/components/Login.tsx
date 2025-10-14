import { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import logoImage from 'figma:asset/a3eb284799e4c260a17df5164bed7f43f456c173.png';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img src={logoImage} alt="Foodloop" className="h-16 w-auto object-contain mx-auto mb-4" />
          <h1 className="text-[#1a1a1a] mb-2">Panel de Restaurante</h1>
          <p className="text-gray-600">Inicia sesión para gestionar tus publicaciones</p>
        </div>

        <Card className="p-8 border-2 border-gray-100 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                placeholder="Tu nombre de usuario"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a]"
              size="lg"
            >
              <LogIn className="mr-2 w-5 h-5" />
              Iniciar sesión
            </Button>

            <p className="text-sm text-gray-500 text-center">
              ¿No tienes cuenta?{' '}
              <a href="#" className="text-[#FDB940] hover:underline">
                Registra tu restaurante
              </a>
            </p>
          </form>
        </Card>

        <p className="text-xs text-gray-500 text-center mt-6">
          Para fines de demostración, puedes usar cualquier usuario y contraseña
        </p>
      </motion.div>
    </div>
  );
}
