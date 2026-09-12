/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { splitsApi } from '../api/client';
import { useResource } from './useResource';
import type { SplitGroup, SplitsSummary } from '../types';

/** Hook de gastos compartidos: fetch de grupos + summary, con loading/refetch. */
export function useSplits() {
  const { data, loading, refreshing, error, refetch } = useResource<[SplitGroup[], SplitsSummary]>(
    () => Promise.all([splitsApi.list(), splitsApi.summary()]),
  );
  return {
    groups: data?.[0] ?? [],
    summary: data?.[1] ?? null,
    loading,
    refreshing,
    error,
    refetch,
  };
}
