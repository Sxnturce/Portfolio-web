import { Outlet } from "react-router-dom";
function layoutHome() {
	return (
		<>
			<header>header</header>
			<main>
				<Outlet />
			</main>
			<footer>footer</footer>
		</>
	);
}

export default layoutHome;
