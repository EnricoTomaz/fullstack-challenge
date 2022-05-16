import './common/env';
import Server from './common/server';
import routes from './routes';
//doc string
export default new Server().router(routes).listen(process.env.PORT);
