import './App.css';
import ChatMessages from './ChatMessages';
import { useEffect } from 'react';

const from = {
  name: 'John Doe',
  objectId: '5EOJTH9nUzM526vKPSVrHzp2zFP2',
  email: 'john@doe.com',
};

const to = {
  objectId: '4e1cda1f-4adf-2fce-f303-83f497ce25c9',
  name: 'Developers',
  icon: 'code-working',
  bg: ' rgb(107, 114, 128)',
  color: '#fff',
};

function App() {
  // apply bindings
  useEffect(() => {
    const messagesComponent = document.querySelector('chat-messages');
    // set from
    messagesComponent.from = from;
    messagesComponent.to = to;
  });

  useEffect(() => {
    // apply dark theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    uiToggleDark(prefersDark.matches);
    prefersDark.addListener((mediaQuery) => uiToggleDark(mediaQuery.matches));
    function uiToggleDark(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
  });

  return (
    <div>
      <h2 className="outer">Hello {from.name}!</h2>
      <ChatMessages></ChatMessages>
    </div>
  );
}

export default App;
