/*
 * Owllow — Copyright (c) 2026 Mauricio Jesus Iturriza Medina.
 * Todos los derechos reservados. Software propietario.
 * Uso restringido; ver LICENSE en la raíz del proyecto.
 */

import { templatesApi } from '../api/client';
import { useResource } from './useResource';
import type { Template } from '../types';

/** Hook de plantillas: fetch (orden por uso) con loading/refetch. */
export function useTemplates() {
  const { data, loading, refreshing, error, refetch } = useResource<Template[]>(() => templatesApi.list());
  return { templates: data ?? [], loading, refreshing, error, refetch };
}
