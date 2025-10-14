import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import logoImage from 'figma:asset/a3eb284799e4c260a17df5164bed7f43f456c173.png';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Foodloop" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-300 max-w-md">
              Conectamos comercios del sector alimenticio con comida sobrante con personas que la necesitan. 
              Juntos reducimos el desperdicio y alimentamos la esperanza.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@foodloop.org</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+54 11 1234-5678</span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#FDB940] rounded-full flex items-center justify-center hover:bg-[#FCA311] transition-colors">
                <Facebook className="w-5 h-5 text-[#1a1a1a]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FDB940] rounded-full flex items-center justify-center hover:bg-[#FCA311] transition-colors">
                <Instagram className="w-5 h-5 text-[#1a1a1a]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FDB940] rounded-full flex items-center justify-center hover:bg-[#FCA311] transition-colors">
                <Twitter className="w-5 h-5 text-[#1a1a1a]" />
              </a>
            </div>
          </div>
        </div>

        {/* Aliados */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-300 mb-4">Aliados:</p>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="px-4 py-2 bg-white/10 rounded">Cruz Roja</div>
            <div className="px-4 py-2 bg-white/10 rounded">Cáritas</div>
            <div className="px-4 py-2 bg-white/10 rounded">Banco de Alimentos</div>
            <div className="px-4 py-2 bg-white/10 rounded">Ministerio de Desarrollo Social</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>&copy; 2025 Foodloop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
