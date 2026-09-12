/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { tagsApi } from '../api/client';
import { useResource } from './useResource';
import type { Tag } from '../types';

/** Hook de etiquetas: fetch (con conteo de transacciones) y loading/refetch. */
export function useTags() {
  const { data, loading, refreshing, error, refetch } = useResource<Tag[]>(() => tagsApi.list());
  return { tags: data ?? [], loading, refreshing, error, refetch };
}
