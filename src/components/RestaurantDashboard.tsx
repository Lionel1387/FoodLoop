import { useState } from 'react';
import { motion } from 'motion/react';
import { PlusCircle, List, BarChart3, LogOut, Upload, Calendar, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

interface Food {
  id: number;
  name: string;
  quantity: number;
  deadline: string;
  image?: string;
  status: 'available' | 'delivered';
  publishedDate: string;
}

interface RestaurantDashboardProps {
  onLogout: () => void;
}

export function RestaurantDashboard({ onLogout }: RestaurantDashboardProps) {
  const [activeSection, setActiveSection] = useState<'add' | 'posts' | 'stats'>('add');
  const [foods, setFoods] = useState<Food[]>([
    {
      id: 1,
      name: 'Pizza Margherita',
      quantity: 5,
      deadline: '2025-10-13 22:00',
      status: 'delivered',
      publishedDate: '2025-10-12 18:30',
    },
    {
      id: 2,
      name: 'Ensalada César',
      quantity: 8,
      deadline: '2025-10-13 21:00',
      status: 'available',
      publishedDate: '2025-10-13 14:00',
    },
    {
      id: 3,
      name: 'Pollo al horno con papas',
      quantity: 12,
      deadline: '2025-10-14 13:00',
      status: 'available',
      publishedDate: '2025-10-13 10:00',
    },
  ]);

  const [newFood, setNewFood] = useState({
    name: '',
    quantity: '',
    deadline: '',
    image: '',
  });

  const handleAddFood = (e: React.FormEvent) => {
    e.preventDefault();
    const food: Food = {
      id: foods.length + 1,
      name: newFood.name,
      quantity: parseInt(newFood.quantity),
      deadline: newFood.deadline,
      image: newFood.image,
      status: 'available',
      publishedDate: new Date().toISOString().slice(0, 16).replace('T', ' '),
    };
    setFoods([food, ...foods]);
    setNewFood({ name: '', quantity: '', deadline: '', image: '' });
    toast.success('Comida publicada exitosamente');
    setActiveSection('posts');
  };

  const stats = {
    totalPublished: foods.length,
    delivered: foods.filter(f => f.status === 'delivered').length,
    available: foods.filter(f => f.status === 'available').length,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden lg:block border-r border-gray-100">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#FDB940] rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-900">Panel Restaurante</p>
              <p className="text-sm text-gray-500">Mi Local</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('add')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'add'
                  ? 'bg-[#FFF3E0] text-[#FDB940]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <PlusCircle className="w-5 h-5" />
              <span>Agregar comida</span>
            </button>

            <button
              onClick={() => setActiveSection('posts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'posts'
                  ? 'bg-[#FFF3E0] text-[#FDB940]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <List className="w-5 h-5" />
              <span>Mis publicaciones</span>
            </button>

            <button
              onClick={() => setActiveSection('stats')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === 'stats'
                  ? 'bg-[#FFF3E0] text-[#FDB940]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Estadísticas</span>
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6 border-t">
          <Button onClick={onLogout} variant="outline" className="w-full">
            <LogOut className="mr-2 w-4 h-4" />
            Cerrar sesión
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="flex justify-around p-2">
          <button
            onClick={() => setActiveSection('add')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded ${
              activeSection === 'add' ? 'text-[#FDB940]' : 'text-gray-600'
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="text-xs">Agregar</span>
          </button>
          <button
            onClick={() => setActiveSection('posts')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded ${
              activeSection === 'posts' ? 'text-[#FDB940]' : 'text-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
            <span className="text-xs">Mis posts</span>
          </button>
          <button
            onClick={() => setActiveSection('stats')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded ${
              activeSection === 'stats' ? 'text-[#FDB940]' : 'text-gray-600'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs">Stats</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Agregar comida */}
          {activeSection === 'add' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-gray-900 mb-6">Agregar comida sobrante</h1>
              <Card className="p-6">
                <form onSubmit={handleAddFood} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre del plato *</Label>
                    <Input
                      id="name"
                      required
                      value={newFood.name}
                      onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                      placeholder="Ej: Pizza Margherita"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Cantidad de porciones *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      required
                      value={newFood.quantity}
                      onChange={(e) => setNewFood({ ...newFood, quantity: e.target.value })}
                      placeholder="Ej: 10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Fecha y hora límite *</Label>
                    <Input
                      id="deadline"
                      type="datetime-local"
                      required
                      value={newFood.deadline}
                      onChange={(e) => setNewFood({ ...newFood, deadline: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">URL de imagen (opcional)</Label>
                    <Input
                      id="image"
                      type="url"
                      value={newFood.image}
                      onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
                      placeholder="https://ejemplo.com/imagen.jpg"
                    />
                    <p className="text-sm text-gray-500">
                      Puedes añadir una URL de imagen para mostrar el plato
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-[#FDB940] hover:bg-[#FCA311] text-[#1a1a1a]" size="lg">
                    <Upload className="mr-2 w-5 h-5" />
                    Publicar comida
                  </Button>
                </form>
              </Card>
            </motion.div>
          )}

          {/* Mis publicaciones (Responsive) */}
          {activeSection === 'posts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-gray-900 mb-6">Mis publicaciones</h1>
              <Card className="p-4">
                {/* Vista de tabla (desktop) */}
                <div className="hidden md:block overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Plato</TableHead>
                        <TableHead>Cantidad</TableHead>
                        <TableHead>Fecha límite</TableHead>
                        <TableHead>Publicado</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {foods.map((food) => (
                        <TableRow key={food.id}>
                          <TableCell>{food.name}</TableCell>
                          <TableCell>{food.quantity} porciones</TableCell>
                          <TableCell className="whitespace-nowrap">
                            {new Date(food.deadline).toLocaleString('es-AR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            {new Date(food.publishedDate).toLocaleString('es-AR', {
                              day: '2-digit',
                              month: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={food.status === 'delivered' ? 'secondary' : 'default'}
                              className={
                                food.status === 'delivered'
                                  ? 'bg-gray-200 text-gray-700'
                                  : 'bg-[#FFF3E0] text-[#FDB940]'
                              }
                            >
                              {food.status === 'delivered' ? 'Entregado' : 'Disponible'}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Vista móvil tipo tarjetas */}
                <div className="md:hidden space-y-4">
                  {foods.map((food) => (
                    <div
                      key={food.id}
                      className="p-4 border rounded-lg bg-white shadow-sm flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">{food.name}</h3>
                        <Badge
                          variant={food.status === 'delivered' ? 'secondary' : 'default'}
                          className={
                            food.status === 'delivered'
                              ? 'bg-gray-200 text-gray-700'
                              : 'bg-[#FFF3E0] text-[#FDB940]'
                          }
                        >
                          {food.status === 'delivered' ? 'Entregado' : 'Disponible'}
                        </Badge>
                      </div>

                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Cantidad:</span> {food.quantity} porciones
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Límite:</span>{' '}
                        {new Date(food.deadline).toLocaleString('es-AR', {
                          day: '2-digit',
                          month: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Publicado:</span>{' '}
                        {new Date(food.publishedDate).toLocaleString('es-AR', {
                          day: '2-digit',
                          month: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}

          {/* Estadísticas */}
          {activeSection === 'stats' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-gray-900 mb-6">Estadísticas</h1>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 border-2 border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Total publicado</span>
                    <List className="w-8 h-8 text-[#FDB940]" />
                  </div>
                  <div className="text-gray-900">{stats.totalPublished}</div>
                  <p className="text-sm text-gray-500">platos en total</p>
                </Card>

                <Card className="p-6 border-2 border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Entregados</span>
                    <Calendar className="w-8 h-8 text-[#FF8A65]" />
                  </div>
                  <div className="text-gray-900">{stats.delivered}</div>
                  <p className="text-sm text-gray-500">platos entregados</p>
                </Card>

                <Card className="p-6 border-2 border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Disponibles</span>
                    <Package className="w-8 h-8 text-[#FFB74D]" />
                  </div>
                  <div className="text-gray-900">{stats.available}</div>
                  <p className="text-sm text-gray-500">platos disponibles</p>
                </Card>
              </div>

              <Card className="p-6 border-2 border-gray-100">
                <h2 className="text-gray-900 mb-4">Impacto social</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Personas alimentadas (estimado)</span>
                    <span className="text-[#FDB940]">{stats.delivered * 8}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Kg de comida salvados</span>
                    <span className="text-[#FDB940]">{stats.delivered * 2.5} kg</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Reducción de CO₂ (estimado)</span>
                    <span className="text-[#FDB940]">{stats.delivered * 3.2} kg</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
