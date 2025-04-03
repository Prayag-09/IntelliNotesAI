'use client';
import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 backdrop-blur-lg'>
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'>
					<div className='text-5xl font-extrabold text-white drop-shadow-lg'>
						IntelliNotes
					</div>
					<p className='mt-2 text-lg text-gray-300 opacity-90'>
						AI-powered note summarization's
					</p>
				</motion.h1>
			</LampContainer>
		</main>
	);
}
