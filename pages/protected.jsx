import { useSession } from 'next-auth/react';
import Nav from '../components/Nav';

export default function Protected() {
	const { data: session } = useSession();
	return (
		<>
			<Nav />

		</>
	);
}
