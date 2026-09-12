/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { savingsApi } from '../api/client';
import { useResource } from './useResource';
import type { SavingsGoal, SavingsSummary } from '../types';

/** Hook de metas de ahorro: fetch de metas + summary, con loading/refetch. */
export function useSavings() {
  const { data, loading, refreshing, error, refetch } = useResource<[SavingsGoal[], SavingsSummary]>(
    () => Promise.all([savingsApi.list(), savingsApi.summary()]),
  );
  return {
    goals: data?.[0] ?? [],
    summary: data?.[1] ?? null,
    loading,
    refreshing,
    error,
    refetch,
  };
}
