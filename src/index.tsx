import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Switch } from './components';
import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean>(false);

  function withEvent(func: Function): React.ChangeEventHandler<any> {
    return (event: React.ChangeEvent<any>) => {
      const { target } = event;
      func(target.value);
    };
  }

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
          <Switch size="sm" checked={true} onChange={withEvent(setChecked)} />
          <Switch color="danger" />
          <Switch color="secondary" />
        </div>
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
