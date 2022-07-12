import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['en']
const availableLanguages = ['en', 'ru']

const options = {
	order: ['navigator', 'htmlTag', 'path', 'subdomain'],

	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'i18nextLng',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,

	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'],

	cookieMinutes: 10,
	cookieDomain: 'myDomain',

	htmlTag: document.documentElement,

	checkWhitelist: true,
}

i18n.use(Backend)

	.use(initReactI18next)

	.init({
		fallbackLng,
		debug: true,
		whitelist: availableLanguages,
		detection: options,

		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
