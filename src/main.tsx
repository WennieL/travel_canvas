import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";
import { polyfill } from "mobile-drag-drop";
import "mobile-drag-drop/default.css";

// Initialize mobile-drag-drop polyfill
polyfill({
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
)
