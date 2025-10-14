import { useState } from 'react';
import { motion } from 'motion/react';
import { Store, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import logoImage from 'figma:asset/a3eb284799e4c260a17df5164bed7f43f456c173.png';

interface RestaurantRegisterProps {
  onNavigate: (page: string) => void;
}

export function RestaurantRegister({ onNavigate }: RestaurantRegisterProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cuit: '',
    address: '',
    email: '',
    phone: '',
    hours: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setFormData({
      name: '',
      cuit: '',
      address: '',
      email: '',
      phone: '',
      hours: '',
      description: '',
    });
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <img src={logoImage} alt="Foodloop" className="h-16 w-auto object-contain mx-auto mb-4" />
            <h1 className="text-[#1a1a1a] mb-3">Registrar Restaurante</h1>
            <p className="text-gray-600">
              Únete a nuestra red solidaria y ayuda a reducir el desperdicio de alimentos
            </p>
          </div>

          <Card className="p-8 border-2 border-gray-100 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del local *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: La Parrilla del Centro"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cuit">CUIT *</Label>
                <Input
                  id="cuit"
                  name="cuit"
                  required
                  value={formData.cuit}
                  onChange={handleChange}
                  placeholder="Ej: 20-12345678-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección completa *</Label>
                <Input
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Ej:Corrientes 1234"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@restaurante.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+54 11 1234-5678"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours">Horarios de atención</Label>
                <Input
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  placeholder="Ej: Lun-Vie 9:00-22:00, Sáb-Dom 10:00-23:00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Breve descripción del restaurante</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu restaurante y el tipo de comida que ofreces..."
                  rows={4}
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a]"
                  size="lg"
                >
                  Enviar solicitud
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                * Campos obligatorios. Revisaremos tu solicitud y te contactaremos en 48 horas.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-16 h-16 bg-[#FFF3E0] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#FDB940]" />
            </div>
            <DialogTitle className="text-center">¡Solicitud enviada con éxito!</DialogTitle>
            <DialogDescription className="text-center">
              Gracias por tu interés en unirte a Foodloop. Revisaremos tu solicitud y nos pondremos en contacto contigo dentro de las próximas 48 horas.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={handleModalClose} className="bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a]">
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
