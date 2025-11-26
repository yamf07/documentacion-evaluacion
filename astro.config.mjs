// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VentaFácil POS',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yamf07/documentacion-evaluacion' }],
			sidebar: [
				{
					label: '1. Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '1.1. Introducción', slug: 'intro/introduction' },
						{ label: '1.2. Requisitos Mínimos', slug: 'intro/requisitos-minimos' },
					],
				},
				{
					label: '2. Acceso al Sistema',
					items: [
						{ label: '2.1. Acceso al Sistema', slug: 'acceso-al-sistema/acceso' },
					],
				},
				{
					label: '3. Funciones Principales',
					items: [
						{ label: '3.1. Cómo realizar una venta (Proceso Estándar)', slug: 'funciones/realizar-venta' },
						{ label: '3.2. Buscar un producto sin código', slug: 'funciones/buscar-producto-sin-id' },
						{ label: '3.3. Anular un producto', slug: 'funciones/anular-producto' },
					],
				},
				{
					label: '4. Cierre de Caja (Fin de Turno)',
					items: [
						{ label: '4.1. Cierre de Caja (Fin de Turno)', slug: 'cierre-caja/cierre' },
					],
				},
				{
					label: '5. Solución de Problemas Comunes',
					items: [
						{ label: '5.1. Solución de Problemas Comunes (FAQ)', slug: 'problemas-comunes-faq/problemas-comunes' },
					],
				},
				{
					label: '6. Soporte Técnico',
					items: [
						{ label: '6.1. Soporte Ténico', slug: 'soporte/soporte-tecnico' },
					],
				},
			],
		}),
	],
});
