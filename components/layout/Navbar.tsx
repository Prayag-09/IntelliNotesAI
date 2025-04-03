import React from 'react';
import { HoverBorderGradient } from '../ui/HoverGradientButton';

const Navbar: React.FC = () => {
	return (
		<div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
			<HoverBorderGradient
				containerClassName='rounded-full'
				as='button'
				className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'>
				<span>LogIn</span>
			</HoverBorderGradient>
		</div>
	);
};

export default Navbar;
