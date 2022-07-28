import { ThemeProvider } from '@mui/system';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages';
import themeDefaults from './themes/default';

function App() {
  return (
    <ThemeProvider theme={themeDefaults}>
        <Header />
        <Pages />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
