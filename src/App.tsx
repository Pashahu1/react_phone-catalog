import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Outlet } from 'react-router-dom';
import { DataProvider } from './store/CartContext';
import { Suspense } from 'react';
import { Loader } from './components/Shared/Loader/Loader';

export const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <main className="content">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </DataProvider>
    </div>
  );
};
