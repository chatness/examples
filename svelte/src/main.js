import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    CURRENT_USER: {
      name: 'John Doe',
      objectId: '5EOJTH9nUzM526vKPSVrHzp2zFP2',
      email: 'john@doe.com',
    },
    CURRENT_GROUPS: [
      {
        objectId: '4e1cda1f-4adf-2fce-f303-83f497ce25c9',
        name: 'Developers',
        icon: 'code-working',
        bg: ' rgb(107, 114, 128)',
        color: '#fff',
      },
      {
        objectId: '1',
        name: 'Movies',
        icon: 'videocam-outline',
        bg: 'rgb(139, 92, 246)',
        color: '#fff',
      },
      {
        objectId: '2',
        name: 'Music',
        icon: 'musical-notes-outline',
        bg: 'rgb(59, 130, 246)',
        color: '#fff',
      },
      {
        objectId: '3',
        name: 'Games',
        icon: 'game-controller-outline',
        bg: 'rgb(5, 150, 105)',
        color: '#fff',
      },
    ],
  },
});

export default app;
