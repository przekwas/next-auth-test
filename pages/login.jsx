import { signIn } from 'next-auth/react';
import Nav from '../components/Nav';

export default function Login() {
	return (
		<>
			<Nav />
			<main className="container">
				<section className="row justify-content-center">
					<div className="col-md-6">
						<form className="px-3 py-5 border rounded shadow form-group d-flex justify-content-center align-items-center">
							<button type="button" onClick={() => signIn('github')} className="btn btn-primary">
								<span>Login with Github</span> <i className="bi bi-github"></i>
							</button>
						</form>
					</div>
				</section>
			</main>
		</>
	);
}
