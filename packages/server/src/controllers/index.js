import { Router } from 'express';

import pingControllers from './ping.controllers';
import usersControllers from './users.controllers';
import pagesControllers from './pages.controllers';
import filesControllers from './files.controllers';

const router = Router();

pingControllers(router);
usersControllers(router);
filesControllers(router);
pagesControllers(router);

export default router;
