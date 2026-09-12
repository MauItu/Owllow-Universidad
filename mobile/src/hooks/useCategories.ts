/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { categoriesApi } from '../api/client';
import { useResource } from './useResource';
import type { Category } from '../types';

/** Hook de categorías (opcionalmente por tipo): fetch con loading/refetch. */
export function useCategories(type?: 'income' | 'expense') {
  const { data, loading, refreshing, error, refetch } = useResource<Category[]>(
    () => (type ? categoriesApi.byType(type) : categoriesApi.list()),
    [type],
  );
  return { categories: data ?? [], loading, refreshing, error, refetch };
}
