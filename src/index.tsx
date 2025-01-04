import { createRoot } from 'react-dom/client';

import { Root } from './Root';

import './styles/main.scss';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
