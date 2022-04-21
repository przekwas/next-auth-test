import { useRouter } from 'next/router';
import Link from 'next/link';

NavLink.defaultProps = {
	exact: false
};

function NavLink({ href, exact, children, ...props }) {
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	if (isActive) {
		props.className += ' text-decoration-underline active';
	}

	return (
		<Link href={href}>
			<a {...props}>{children}</a>
		</Link>
	);
}

export default function Nav() {
	return (
		<nav className="p-3 mb-5 shadow nav justify-content-end">
			<NavLink exact className="nav-link" href="/">
				Home
			</NavLink>
			<NavLink exact className="nav-link" href="/login">
				Login
			</NavLink>
			<NavLink exact className="nav-link" href="/protected">
				Protected
			</NavLink>
		</nav>
	);
}
