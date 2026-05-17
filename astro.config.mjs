// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.qollektor.de',
	integrations: [
		starlight({
			title: 'Qollektor Docs',
			description: 'Anleitungen für Organisatoren und Teilnehmer der Qollektor-Sammelbestellungsplattform.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Deutsch', lang: 'de' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/qovio/qollektor-docs' },
			],
			sidebar: [
				{
					label: 'Für Organisatoren',
					translations: { en: 'For organizers' },
					items: [{ autogenerate: { directory: 'organizer' } }],
				},
				{
					label: 'Für Teilnehmer',
					translations: { en: 'For participants' },
					items: [{ autogenerate: { directory: 'participant' } }],
				},
				{
					label: 'Nachschlagen',
					translations: { en: 'Reference' },
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
		sitemap(),
	],
});
