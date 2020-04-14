import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';

import Routes from './Routes';

const App: React.FC<{ url: string }> = ({ url }) => {
  return (
    <ServerLocation url={url}>
      <Routes />
    </ServerLocation>
  );
};

export const renderReact = (url: string) => renderToString(<App url={url} />);

export const renderMarkup = (html: string) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />
    <title>SSR - Software Engineer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${html}</div>
    <script src="bundleapp.js"></script>
  </body>
  </html>
`;
