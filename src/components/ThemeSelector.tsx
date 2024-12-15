import { Theme } from '../types/Theme';

interface ThemeSelectorProps {
  themes: Theme[];
  selectedTheme: Theme;
  onThemeSelect: (theme: Theme) => void;
}

export const ThemeSelector = ({ themes, selectedTheme, onThemeSelect }: ThemeSelectorProps) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Select Theme</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeSelect(theme)}
            style={{
              padding: '1rem',
              border: theme.id === selectedTheme.id ? `2px solid ${theme.primaryColor}` : '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: theme.backgroundColor,
              cursor: 'pointer'
            }}
          >
            <div style={{ width: '100px' }}>
              <div style={{ height: '20px', backgroundColor: theme.primaryColor }}></div>
              <div style={{ height: '20px', backgroundColor: theme.secondaryColor }}></div>
              <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>{theme.name}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}; 