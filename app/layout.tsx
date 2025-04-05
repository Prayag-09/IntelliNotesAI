import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import Navbar from '@/components/layout/Navbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'IntelliNotesAI - AI-Powered Note Summarization',
	description: 'AI-powered note summarization and management tool',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					<main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 backdrop-blur-lg'>
						<div className='container mx-auto'>{children}</div>
					</main>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
