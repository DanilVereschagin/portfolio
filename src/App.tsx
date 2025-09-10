import { HashRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Router from './components/Router/Router';
import { Container } from './components/Container/Container';

function App() {
	return (
		<HashRouter>
			<Header />
			<Container>
				<Router />
			</Container>
		</HashRouter>
	);
}

export default App;
