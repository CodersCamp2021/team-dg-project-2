import { Router } from 'express';

import filesControllers from './files.controllers';
import pagesControllers from './pages.controllers';
import pingControllers from './ping.controllers';
import usersControllers from './users.controllers';

const router = Router();

pingControllers(router);
usersControllers(router);
filesControllers(router);
pagesControllers(router);

export default router;
