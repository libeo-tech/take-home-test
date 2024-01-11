"use strict";

import { items } from "./src/data";
import { Manage } from "./src/services/manage";

const manage = new Manage(items);
manage.process();
