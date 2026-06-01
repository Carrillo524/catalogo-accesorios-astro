import { defineCollection, z } from 'astro:content';
// Esta línea es nueva y obligatoria en Astro v6
import { glob } from 'astro/loaders'; 

const productosCollection = defineCollection({
  // Reemplazamos type por loader
  loader: glob({ pattern: "**/*.md", base: "./src/content/productos" }),
  schema: z.object({
    referencia: z.string().optional(),
    nombre: z.string(),
    descripcionBreve: z.string(),
    precio: z.number(),
    imagen: z.string(), // La foto principal
    galeria: z.array(z.string()).optional(), // Lista de fotos adicionales
    estado: z.enum(['disponible', 'agotado']),
  })
});

export const collections = {
  'productos': productosCollection,
};