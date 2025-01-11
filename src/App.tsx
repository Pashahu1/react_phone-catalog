import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './components/Shared/Loader/Loader';
import { Breadcrumbs } from './components/Shared/Breadcrumbs/Breadcrumbs';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Suspense fallback={<Loader />}>
          <Breadcrumbs />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
