/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { insightsApi } from '../api/client';
import { useResource } from './useResource';
import type { Insight } from '../types';

/** Hook de insights del mes: fetch con loading/refetch. */
export function useInsights() {
  const { data, loading, refreshing, error, refetch } = useResource<Insight[]>(() => insightsApi.list());
  return { insights: data ?? [], loading, refreshing, error, refetch };
}
