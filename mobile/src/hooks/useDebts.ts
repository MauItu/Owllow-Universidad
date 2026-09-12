/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { debtsApi } from '../api/client';
import { useResource } from './useResource';
import type { Debt, DebtsSummary } from '../types';

/** Hook de deudas: fetch de deudas + summary, con loading/refetch. */
export function useDebts() {
  const { data, loading, refreshing, error, refetch } = useResource<[Debt[], DebtsSummary]>(
    () => Promise.all([debtsApi.list(), debtsApi.summary()]),
  );
  return {
    debts: data?.[0] ?? [],
    summary: data?.[1] ?? null,
    loading,
    refreshing,
    error,
    refetch,
  };
}
