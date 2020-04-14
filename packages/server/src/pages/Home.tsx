import * as React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <div>I'm the home component - Engineer</div>
      <button onClick={() => console.log('Hi There!')}>Press me</button>
    </div>
  );
};

export default Home;
