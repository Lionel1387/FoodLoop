import { useState } from 'react';
import { motion } from 'motion/react';
import { List, LogOut, Filter, MapPin, Clock, CheckCircle2, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';

interface Food {
  id: number;
  restaurant: string;
  restaurantAddress: string;
  restaurantZone: string;
  name: string;
  quantity: number;
  deadline: string;
  publishedDate: string;
  type: string;
  status: 'available' | 'delivered';
}

interface CPCDashboardProps {
  onLogout: () => void;
}

export function CPCDashboard({ onLogout }: CPCDashboardProps) {
  const [foods, setFoods] = useState<Food[]>([
    {
      id: 1,
      restaurant: 'La Parrilla del Centro',
      restaurantAddress: 'Av. Corrientes 1234',
      restaurantZone: 'Palermo',
      name: 'Milanesas con puré',
      quantity: 15,
      deadline: '2025-10-13 22:00',
      publishedDate: '2025-10-13 18:00',
      type: 'Carne',
      status: 'available',
    },
    {
      id: 2,
      restaurant: 'Pizzería Napolitana',
      restaurantAddress: 'Av. Santa Fe 5678',
      restaurantZone: 'Recoleta',
      name: 'Pizza Margherita',
      quantity: 8,
      deadline: '2025-10-13 21:00',
      publishedDate: '2025-10-13 17:30',
      type: 'Pizza',
      status: 'available',
    },
    {
      id: 3,
      restaurant: 'El Buen Sabor',
      restaurantAddress: 'Defensa 987',
      restaurantZone: 'San Telmo',
      name: 'Ensaladas variadas',
      quantity: 12,
      deadline: '2025-10-13 20:00',
      publishedDate: '2025-10-13 16:00',
      type: 'Vegetariano',
      status: 'available',
    },
    {
      id: 4,
      restaurant: 'Café & Bistró',
      restaurantAddress: 'Cabildo 3456',
      restaurantZone: 'Belgrano',
      name: 'Sándwiches y wraps',
      quantity: 20,
      deadline: '2025-10-14 11:00',
      publishedDate: '2025-10-13 19:00',
      type: 'Snacks',
      status: 'available',
    },
    {
      id: 5,
      restaurant: 'Sushi House',
      restaurantAddress: 'Av. Alicia Moreau de Justo 890',
      restaurantZone: 'Puerto Madero',
      name: 'Rolls y sashimi',
      quantity: 10,
      deadline: '2025-10-13 22:30',
      publishedDate: '2025-10-13 19:30',
      type: 'Pescado',
      status: 'available',
    },
  ]);

  const [filters, setFilters] = useState({
    zone: 'all',
    type: 'all',
    search: '',
  });

  const handleMarkDelivered = (id: number) => {
    setFoods(foods.map(food => 
      food.id === id ? { ...food, status: 'delivered' } : food
    ));
    toast.success('Comida marcada como entregada');
  };

  const filteredFoods = foods.filter(food => {
    if (food.status === 'delivered') return false;
    if (filters.zone !== 'all' && food.restaurantZone !== filters.zone) return false;
    if (filters.type !== 'all' && food.type !== filters.type) return false;
    if (filters.search && !food.restaurant.toLowerCase().includes(filters.search.toLowerCase()) && 
        !food.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const zones = ['Palermo', 'Recoleta', 'San Telmo', 'Belgrano', 'Puerto Madero', 'Villa Crespo'];
  const types = ['Carne', 'Pizza', 'Vegetariano', 'Snacks', 'Pescado', 'Pasta'];

  const stats = {
    available: foods.filter(f => f.status === 'available').length,
    delivered: foods.filter(f => f.status === 'delivered').length,
    totalPortions: foods.filter(f => f.status === 'available').reduce((sum, f) => sum + f.quantity, 0),
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden lg:block">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-900">Panel CPC</p>
              <p className="text-sm text-gray-500">Voluntario</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-green-100 text-green-700">
              <List className="w-5 h-5" />
              <span>Lista de sobrantes</span>
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

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-gray-900 mb-6">Comida disponible para retirar</h1>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Disponibles</span>
                  <List className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-gray-900">{stats.available}</div>
                <p className="text-sm text-gray-500">publicaciones activas</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Total porciones</span>
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-gray-900">{stats.totalPortions}</div>
                <p className="text-sm text-gray-500">porciones disponibles</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Entregados hoy</span>
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-gray-900">{stats.delivered}</div>
                <p className="text-sm text-gray-500">platos coordinados</p>
              </Card>
            </div>

            {/* Filters */}
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h2 className="text-gray-900">Filtros</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Buscar</label>
                  <Input
                    placeholder="Restaurante o plato..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Zona</label>
                  <Select value={filters.zone} onValueChange={(value) => setFilters({ ...filters, zone: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las zonas</SelectItem>
                      {zones.map(zone => (
                        <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Tipo de comida</label>
                  <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los tipos</SelectItem>
                      {types.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Food List */}
            <Card>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Restaurante</TableHead>
                      <TableHead>Comida</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Cantidad</TableHead>
                      <TableHead>Dirección</TableHead>
                      <TableHead>Fecha límite</TableHead>
                      <TableHead>Acción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFoods.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                          No se encontraron resultados con los filtros seleccionados
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredFoods.map((food) => (
                        <TableRow key={food.id}>
                          <TableCell>
                            <div>
                              <div className="text-gray-900">{food.restaurant}</div>
                              <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" />
                                {food.restaurantZone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{food.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{food.type}</Badge>
                          </TableCell>
                          <TableCell>{food.quantity} porciones</TableCell>
                          <TableCell className="max-w-[200px]">{food.restaurantAddress}</TableCell>
                          <TableCell className="whitespace-nowrap">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-gray-500" />
                              {new Date(food.deadline).toLocaleString('es-AR', {
                                day: '2-digit',
                                month: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => handleMarkDelivered(food.id)}
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle2 className="mr-1 w-4 h-4" />
                              Marcar entregada
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {filteredFoods.length > 0 && (
              <p className="text-sm text-gray-500 mt-4">
                Mostrando {filteredFoods.length} de {stats.available} publicaciones disponibles
              </p>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
