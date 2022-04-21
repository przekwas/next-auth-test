import { useSession } from 'next-auth/react';
import Nav from '../components/Nav';

export default function Home() {
	const { data: session } = useSession();

	return (
		<>
			<Nav />
			<main className="container">
				<section className="row justify-content-center">
					<div className="col-md-12">
						{session ? (
							<h1 className="text-center">Signed in as {session?.user.email}</h1>
						) : (
							<h1 className="text-center">Not Signed In</h1>
						)}
					</div>
				</section>
			</main>
		</>
	);
}
