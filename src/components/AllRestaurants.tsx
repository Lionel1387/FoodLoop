import { motion } from 'motion/react';
import { Store, MapPin, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function AllRestaurants() {
const restaurants = [
  { name: 'Pizzería Napolitana', zone: 'Nueva Córdoba', dishes: 243, description: 'Auténtica pizza italiana con masa madre', verified: true },
  { name: 'La Cocina de la Abuela', zone: 'Alberdi', dishes: 203, description: 'Comida casera tradicional', verified: true },
  { name: 'Café & Bistró', zone: 'Cerro de las Rosas', dishes: 189, description: 'Café de especialidad y brunch', verified: true },
  { name: 'Mar y Tierra', zone: 'Costanera', dishes: 178, description: 'Mariscos y carnes premium', verified: true },
  { name: 'Veggie Garden', zone: 'General Paz', dishes: 167, description: 'Cocina vegana y vegetariana', verified: true },
  { name: 'La Parrilla del Centro', zone: 'Centro', dishes: 156, description: 'Especialistas en carnes y parrilla argentina', verified: true },
  { name: 'Delicias Asiáticas', zone: 'Güemes', dishes: 156, description: 'Fusión de cocina asiática', verified: false },
  { name: 'Pasta & Co', zone: 'Nueva Córdoba', dishes: 145, description: 'Pasta fresca casera italiana', verified: true },
  { name: 'Sushi House', zone: 'Villa Belgrano', dishes: 134, description: 'Sushi fresco y rolls creativos', verified: true },
  { name: 'El Parador', zone: 'Güemes', dishes: 134, description: 'Parrilla y vinos de autor', verified: false },
  { name: 'Sabores del Norte', zone: 'Alta Córdoba', dishes: 112, description: 'Cocina regional del noroeste argentino', verified: true },
  { name: 'El Buen Sabor', zone: 'San Vicente', dishes: 98, description: 'Cocina casera y tradicional argentina', verified: true },
];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-[#FDB940] rounded-full flex items-center justify-center mx-auto mb-6">
            <Store className="w-10 h-10 text-[#1a1a1a]" />
          </div>
          <h1 className="text-[#1a1a1a] mb-4">Nuestros Restaurantes Aliados</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Conoce a los establecimientos gastronómicos que forman parte de nuestra red solidaria. 
            Cada uno aporta su granito de arena para construir una comunidad más justa.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] border-2 border-[#FDB940]">
            <div className="text-4xl text-[#1a1a1a] mb-2">{restaurants.length}</div>
            <p className="text-gray-600">Restaurantes activos</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] border-2 border-[#FDB940]">
            <div className="text-4xl text-[#1a1a1a] mb-2">
              {restaurants.reduce((sum, r) => sum + r.dishes, 0)}
            </div>
            <p className="text-gray-600">Platos donados en total</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] border-2 border-[#FDB940]">
            <div className="text-4xl text-[#1a1a1a] mb-2">
              {restaurants.filter(r => r.verified).length}
            </div>
            <p className="text-gray-600">Restaurantes verificados</p>
          </Card>
        </div>

        {/* Grid de restaurantes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-all h-full flex flex-col border-2 hover:border-[#FDB940] group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-[#FFF3E0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Store className="w-7 h-7 text-[#FDB940]" />
                  </div>
                  {restaurant.verified && (
                    <Badge className="bg-[#FDB940] text-[#1a1a1a] hover:bg-[#FDB940] gap-1">
                      <Award className="w-3 h-3" />
                      Verificado
                    </Badge>
                  )}
                </div>

                <h3 className="text-gray-900 mb-2">{restaurant.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{restaurant.zone}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {restaurant.description}
                </p>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Platos donados</span>
                    <span className="text-[#FDB940]">{restaurant.dishes}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#FDB940] to-[#FCA311] rounded-2xl p-12 text-center"
        >
          <h2 className="text-[#1a1a1a] mb-4">¿Querés ser parte de la red?</h2>
          <p className="text-[#1a1a1a]/80 mb-8 max-w-2xl mx-auto text-lg">
            Sumate a nuestra comunidad de restaurantes comprometidos con la solidaridad y la sostenibilidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              Registrar mi restaurante
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#1a1a1a] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Más información
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
