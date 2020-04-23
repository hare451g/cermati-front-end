import React from 'react';
import { Helmet } from 'react-helmet';

// mock
import auth from '../../constants/auth';

function App() {
  return (
    <>
      <Helmet
        title={auth.name}
        titleTemplate={`%s | Cermati.com Front-end Developer Entry Test`}
      />
      <div>app</div>
    </>
  );
}

export default App;
