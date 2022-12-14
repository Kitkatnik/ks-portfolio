import './App.css'

// import { requestRepos } from './utils/github/github.utils';
import { inject } from '@vercel/analytics';

import BrowserWindow from './components/browser-window/browser-window.component';
import IconBar from './components/iconbar/iconbar.component';
import Explorer from './components/explorer/explorer.component';
import About from './routes/about/about.component';
import StatusBar from './components/status-bar/status-bar.component';

function App() {
  inject();

  // const reposList = requestRepos()
  //   .then( response => response.json())
  //   .then( data => data)

  return (
    <div className="browser">
      <BrowserWindow />
      <div className="app">
        <IconBar />
        <Explorer />
        <About />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
