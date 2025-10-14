import { motion } from 'motion/react';
import { Lightbulb, Target, Heart, Users } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowItWorks() {
  const steps = [
    {
      title: 'Registro del comercio',
      description: 'Los comercios se registran en la plataforma proporcionando su información básica y horarios de operación.',
      icon: '1',
    },
    {
      title: 'Publicación de sobrantes',
      description: 'Al finalizar el servicio, publican la comida sobrante de calidad especificando cantidad y hora límite de retiro.',
      icon: '2',
    },
    {
      title: 'Coordinación ente',
      description: 'El ente encargado informa sobre los exedentes de comida a las personas que lo necesiten',
      icon: '3',
    },
    {
      title: 'Distribución solidaria',
      description: 'Las familias reciben alimentos frescos y nutritivos, reduciendo el desperdicio.',
      icon: '4',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#1a1a1a] mb-4">¿Cómo funciona Foodloop?</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Un sistema eficiente que conecta la generosidad de los comercios con las necesidades de la comunidad
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 hover:border-[#FDB940] transition-all">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FDB940] to-[#FCA311] rounded-full flex items-center justify-center text-[#1a1a1a] flex-shrink-0 shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#FFF3E0] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#1a1a1a] mb-4">Beneficios para todos</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FDB940] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1a1a1a] text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900">Para comercios</p>
                    <p className="text-gray-600 text-sm">Reducen desperdicio, mejoran su imagen social y contribuyen a la comunidad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FDB940] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1a1a1a] text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900">Para familias</p>
                    <p className="text-gray-600 text-sm">Acceden a alimentos de calidad de forma gratuita y digna</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FDB940] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1a1a1a] text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900">Para el medio ambiente</p>
                    <p className="text-gray-600 text-sm">Se reduce el impacto ambiental del desperdicio alimentario</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwZm9vZCUyMGRvbmF0aW9ufGVufDF8fHx8MTc2MDQ2Njk1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Voluntarios ayudando"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const values = [
    {
      title: 'Solidaridad',
      description: 'Creemos en la ayuda mutua y el compromiso con quienes más lo necesitan.',
      icon: Heart,
    },
    {
      title: 'Sostenibilidad',
      description: 'Trabajamos por reducir el desperdicio y cuidar nuestro planeta.',
      icon: Lightbulb,
    },
    {
      title: 'Comunidad',
      description: 'Fortalecemos los lazos sociales y construimos redes de apoyo.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#1a1a1a] mb-4">Sobre Foodloop</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Un proyecto social que nace del compromiso de construir una sociedad más justa y sostenible
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1a1a1a] mb-4">Nuestra misión</h2>
            <p className="text-gray-600 mb-6">
              Foodloop nació en 2025 con el objetivo de crear un puente entre quienes tienen alimentos de calidad 
              sobrantes y quienes los necesitan. Creemos que nadie debería pasar hambre mientras se desperdician 
              toneladas de comida cada día.
            </p>
            <p className="text-gray-600">
              Trabajamos en colaboración con comercios del sector alimenticio para 
              garantizar que cada plato cuente y que cada persona tenga acceso a alimentación digna y nutritiva.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NjA0NjY5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Comida fresca"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <div className="mb-20">
          <h2 className="text-[#1a1a1a] mb-12 text-center">Nuestros valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-shadow h-full border-2 hover:border-[#FDB940]">
                  <div className="w-16 h-16 bg-[#FFF3E0] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#FDB940]" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-2xl p-8 md:p-12 text-center">
          <Target className="w-16 h-16 text-[#FDB940] mx-auto mb-6" />
          <h2 className="text-[#1a1a1a] mb-4">Nuestro objetivo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aspiramos a expandir Foodloop a toda Córdoba, conectando miles de comercios 
            con comunidades necesitadas y construyendo un futuro donde el desperdicio alimentario sea 
            cosa del pasado.
          </p>
        </div>
      </div>
    </div>
  );
}
