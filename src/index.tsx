import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Switch } from './components';
import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleOnchange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Switch checked={checked} onChange={handleOnchange} />
        </div>
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
