import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/contentora-docs/docs',
  source: docs.toFumadocsSource(),
});
