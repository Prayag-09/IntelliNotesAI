import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const LogOut: React.FC = () => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleLogOut = async () => {
		setLoading(true);
	};

	// const {errorMessage = await logOutAction();

	return (
		<Button>
			{loading ? <Loader2 className='animate-spin' /> : <span>Log Out</span>}
			<span className='sr-only'>Log Out</span>
		</Button>
	);
};

export default LogOut;
