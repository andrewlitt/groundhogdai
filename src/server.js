import path from 'path';
import express from 'express';
import logger from 'morgan';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => {
	console.log(`Movie mystic listening on port ${port}`);
});
