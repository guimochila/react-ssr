import express, { Request, Response } from 'express';

import { renderMarkup, renderReact } from './renderMarkup';

const app = express();

app.use(express.static('dist/public'));

app.get('*', (req: Request, res: Response) => {
  res.send(renderMarkup(renderReact(req.path)));
});

app.listen(3000, () => {
  console.log('Server start 🚀');
});
