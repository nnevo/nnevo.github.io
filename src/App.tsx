import { useState } from 'react';
import { InvoicePreview } from './components/InvoicePreview';
import { ThemeSelector } from './components/ThemeSelector';
import { sampleThemes } from './types/Theme';
import './App.css';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(sampleThemes[0]);

  return (
    <div className="App">
      <h1>Invoice Theming</h1>
      <ThemeSelector
        themes={sampleThemes}
        selectedTheme={selectedTheme}
        onThemeSelect={setSelectedTheme}
      />
      <InvoicePreview theme={selectedTheme} />
    </div>
  );
}

export default App; 