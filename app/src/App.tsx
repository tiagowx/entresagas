import { ThemeProvider } from '@mui/system';
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
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
