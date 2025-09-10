import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Router from './components/Router/Router';
import { Container } from './components/Container/Container';

function App() {
	return (
		<BrowserRouter basename='/portfolio'>
			<Header />
			<Container>
				<Router />
			</Container>
		</BrowserRouter>
	);
}

export default App;
