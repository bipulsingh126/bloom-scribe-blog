import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blog: {
					'green': '#4A6741',
					'sage': '#7A917B',
					'beige': '#F5F1E8',
					'cream': '#FAF7F0',
					'brown': '#6B4D2D',
					'light-brown': '#AA8E6C',
					'dark': '#2D2A24'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				serif: ['Playfair Display', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			animation: {
				"in": "in 0.5s ease-out",
				"out": "out 0.5s ease-in",
				"slide-in-from-top": "slide-in-from-top 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
				"slide-in-from-bottom": "slide-in-from-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
				"fade-in": "fade-in 0.4s ease-in-out",
				"fade-out": "fade-out 0.4s ease-in-out",
			},
			keyframes: {
				"in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				"slide-in-from-top": {
					"0%": { transform: "translateY(-10%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"slide-in-from-bottom": {
					"0%": { transform: "translateY(10%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'hsl(var(--foreground))',
						a: {
							color: 'hsl(var(--primary))',
							'&:hover': {
								color: 'hsl(var(--primary))',
								opacity: '0.8'
							}
						},
						h1: {
							fontFamily: 'Playfair Display, Georgia, serif',
						},
						h2: {
							fontFamily: 'Playfair Display, Georgia, serif',
						},
						h3: {
							fontFamily: 'Playfair Display, Georgia, serif',
						},
						h4: {
							fontFamily: 'Playfair Display, Georgia, serif',
						},
					}
				}
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"), 
		require('@tailwindcss/typography')
	],
} satisfies Config;
