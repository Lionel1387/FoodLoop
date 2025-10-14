import { motion } from 'motion/react';
import { Store, Users, TrendingUp, ArrowRight, MapPin, Clock, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Badge } from './ui/badge';

interface PublicHomeProps {
  onNavigate: (page: string) => void;
}

export function PublicHome({ onNavigate }: PublicHomeProps) {
  const stats = [
    { label: 'Platos entregados', value: '12,458', icon: TrendingUp },
    { label: 'Restaurantes activos', value: '87', icon: Store },
    { label: 'Familias asistidas', value: '3,421', icon: Users },
  ];

  const steps = [
    {
      number: '1',
      title: 'Comercio publica',
      description: 'Los comercios publican comida sobrante de calidad en tiempo real.',
      icon: Store,
    },
    {
      number: '2',
      title: 'Ente coordina',
      description: 'CPC,Iglesia u otro ente informa sobre el exedente de comida.',
      icon: Users,
    },
    {
      number: '3',
      title: 'Familias reciben',
      description: 'Las familias que lo necesitan reciben alimentos frescos y nutritivos.',
      icon: CheckCircle2,
    },
  ];

  const restaurants = [
  { 
    name: 'La Parrilla del Centro', 
    zone: 'Centro', 
    dishes: 156, 
    description: 'Especialistas en carnes y parrilla argentina', 
    address: 'Av. Colón 1234' 
  },
  { 
    name: 'Pizzería Napolitana', 
    zone: 'Nueva Córdoba', 
    dishes: 243, 
    description: 'Auténtica pizza italiana con masa madre', 
    address: 'Av. Hipólito Yrigoyen 567' 
  },
  { 
    name: 'El Buen Sabor', 
    zone: 'San Vicente', 
    dishes: 98, 
    description: 'Cocina casera y tradicional argentina', 
    address: 'Av. San Jerónimo 987' 
  },
  { 
    name: 'Café & Bistró', 
    zone: 'Cerro de las Rosas', 
    dishes: 189, 
    description: 'Café de especialidad y brunch', 
    address: 'Av. Rafael Núñez 3456' 
  },
  { 
    name: 'Sushi House', 
    zone: 'Villa Belgrano', 
    dishes: 134, 
    description: 'Sushi fresco y rolls creativos', 
    address: 'Av. Gauss 890' 
  },
  { 
    name: 'Veggie Garden', 
    zone: 'General Paz', 
    dishes: 167, 
    description: 'Cocina vegana y vegetariana', 
    address: '25 de Mayo 543' 
  },
  { 
    name: 'Pasta & Co', 
    zone: 'Güemes', 
    dishes: 145, 
    description: 'Pasta fresca casera italiana', 
    address: 'Belgrano 456' 
  },
  { 
    name: 'Sabores del Norte', 
    zone: 'Alta Córdoba', 
    dishes: 112, 
    description: 'Cocina regional del noroeste argentino', 
    address: 'Juan B. Justo 876' 
  },
  { 
    name: 'Mar y Tierra', 
    zone: 'Costanera', 
    dishes: 178, 
    description: 'Mariscos y carnes premium', 
    address: 'Av. del Trabajo 1023' 
  },
  { 
    name: 'La Cocina de la Abuela', 
    zone: 'Alberdi', 
    dishes: 203, 
    description: 'Comida casera tradicional', 
    address: 'Av. Duarte Quirós 2145' 
  },
  { 
    name: 'Delicias Asiáticas', 
    zone: 'Güemes', 
    dishes: 156, 
    description: 'Fusión de cocina asiática', 
    address: 'Achával Rodríguez 321' 
  },
  { 
    name: 'El Parador', 
    zone: 'Güemes', 
    dishes: 134, 
    description: 'Parrilla y vinos de autor', 
    address: 'Belgrano 499' 
  },
];

  const topRestaurants = [...restaurants].sort((a, b) => b.dishes - a.dishes).slice(0, 3);

  const availableFoods = [
  {
    id: 1,
    restaurant: 'La Parrilla del Centro',
    zone: 'Centro',
    name: 'Milanesas con puré',
    portions: 15,
    type: 'Carne',
    deadline: '2025-10-13 22:00',
    address: 'Av. Colón 1234',
  },
  {
    id: 2,
    restaurant: 'Pizzería Napolitana',
    zone: 'Nueva Córdoba',
    name: 'Pizza Margherita',
    portions: 8,
    type: 'Pizza',
    deadline: '2025-10-13 21:00',
    address: 'Av. Hipólito Yrigoyen 567',
  },
  {
    id: 3,
    restaurant: 'El Buen Sabor',
    zone: 'San Vicente',
    name: 'Ensaladas variadas',
    portions: 12,
    type: 'Vegetariano',
    deadline: '2025-10-13 20:00',
    address: 'Av. San Jerónimo 987',
  },
  {
    id: 4,
    restaurant: 'Café & Bistró',
    zone: 'Cerro de las Rosas',
    name: 'Sándwiches y wraps',
    portions: 20,
    type: 'Snacks',
    deadline: '2025-10-14 11:00',
    address: 'Av. Rafael Núñez 3456',
  },
  {
    id: 5,
    restaurant: 'Sushi House',
    zone: 'Villa Belgrano',
    name: 'Rolls y sashimi',
    portions: 10,
    type: 'Pescado',
    deadline: '2025-10-13 22:30',
    address: 'Av. Gauss 890',
  },
  {
    id: 6,
    restaurant: 'Veggie Garden',
    zone: 'General Paz',
    name: 'Bowl vegano de quinoa',
    portions: 18,
    type: 'Vegetariano',
    deadline: '2025-10-14 13:00',
    address: '25 de Mayo 543',
  },
  {
    id: 7,
    restaurant: 'Pasta & Co',
    zone: 'Güemes',
    name: 'Ravioles caseros',
    portions: 14,
    type: 'Pasta',
    deadline: '2025-10-13 21:30',
    address: 'Belgrano 456',
  },
  {
    id: 8,
    restaurant: 'Sabores del Norte',
    zone: 'Alta Córdoba',
    name: 'Empanadas salteñas',
    portions: 25,
    type: 'Snacks',
    deadline: '2025-10-14 10:00',
    address: 'Juan B. Justo 876',
  },
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fullscreen con overlay */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2hhcmluZyUyMGNvbW11bml0eSUyMG1lYWx8ZW58MXx8fHwxNzYwNDY2OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Comida para compartir"
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/65"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
              Reducimos el desperdicio, alimentamos la esperanza
            </h1>
            <p className="text-white/90 mb-10 max-w-3xl mx-auto text-lg md:text-xl">
              Conectamos comercios del sector alimenticio con comida sobrante de calidad con personas que la necesitan. 
              Juntos construimos una comunidad más solidaria y sostenible.
            </p>
            <Button 
              onClick={() => onNavigate('register')}
              size="lg"
              className="bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a] px-8 py-6 text-lg"
            >
              Sumar mi comercio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Impacto Section */}
      <section className="bg-[#FDB940] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-[#1a1a1a]"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="mb-2">{stat.value}</div>
                <p className="text-[#1a1a1a]/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1a1a1a] mb-4">Cómo funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un proceso simple y efectivo que conecta tres actores clave en nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-shadow relative border-2 hover:border-[#FDB940]">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FDB940] text-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                  <step.icon className="w-16 h-16 text-[#FDB940] mx-auto mt-4 mb-6" />
                  <h3 className="text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comidas disponibles ahora */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#FDB940] rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-8 h-8 text-[#1a1a1a]" />
            </div>
            <h2 className="text-[#1a1a1a] mb-4">Comidas disponibles ahora</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alimentos frescos y de calidad listos para retirar. Si eres parte de un CPC o comedor comunitario, contacta directamente con los comercios.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {availableFoods.map((food, index) => (
                  <CarouselItem key={food.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <Card className="p-6 hover:shadow-xl transition-shadow h-full flex flex-col border-2 hover:border-[#FDB940]">
                        <div className="flex items-start justify-between mb-4">
                          <Badge className="bg-[#FFF3E0] text-[#1a1a1a] hover:bg-[#FFF3E0]">
                            {food.type}
                          </Badge>
                          <div className="w-10 h-10 bg-[#FFF3E0] rounded-full flex items-center justify-center flex-shrink-0">
                            <UtensilsCrossed className="w-5 h-5 text-[#FDB940]" />
                          </div>
                        </div>

                        <h3 className="text-gray-900 mb-2">{food.name}</h3>
                        
                        <div className="space-y-2 mb-4 flex-1">
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Store className="w-4 h-4" />
                            <span>{food.restaurant}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{food.zone} - {food.address}</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Porciones disponibles</span>
                            <span className="text-[#FDB940]">{food.portions}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#FF8A65]">
                            <Clock className="w-4 h-4" />
                            <span>
                              Retirar antes de{' '}
                              {new Date(food.deadline).toLocaleString('es-AR', {
                                day: '2-digit',
                                month: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Top 3 Restaurantes Destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1a1a1a] mb-4">Top Comercios del Mes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los comercios que más han contribuido a nuestra comunidad este mes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all relative overflow-hidden group border-2 hover:border-[#FDB940]">
                  {/* Badge de posición */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#FDB940] text-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl">#{index + 1}</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-[#FFF3E0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Store className="w-10 h-10 text-[#FDB940]" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{restaurant.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.zone}</span>
                    </div>
                    <div className="pt-4 border-t w-full">
                      <div className="text-3xl text-[#FDB940] mb-2">{restaurant.dishes}</div>
                      <p className="text-sm text-gray-600">platos donados</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDB940] to-[#FCA311]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1a1a1a] mb-6">¿Listo para hacer la diferencia?</h2>
          <p className="text-[#1a1a1a]/80 mb-8 text-lg">
            Únete a nuestra red de comercios comprometidos con la comunidad
          </p>
          <Button 
            onClick={() => onNavigate('register')}
            size="lg"
            className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
          >
            Registrar mi comercio ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
