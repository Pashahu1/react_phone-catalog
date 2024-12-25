import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Outlet } from 'react-router-dom';
import { DataProvider } from './store/CartContext';

export const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </DataProvider>
    </div>
  );
};
