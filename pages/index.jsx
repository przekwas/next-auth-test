import Nav from '../components/Nav';

export default function Home() {
	return (
		<>
			<Nav />
			<main className="container">
				<section className="row justify-content-center">
					<div className="col-md-12">
						<h1 className="text-center">Home Page</h1>
					</div>
				</section>
			</main>
		</>
	);
}
