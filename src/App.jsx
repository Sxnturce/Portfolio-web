import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "./layout/layoutHome";
import Home from "./views/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<HomeLayout />} path="/">
						<Route index element={<Home />} />
					</Route>
					<Route path="*" element={<Navigate to={"/"} />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
