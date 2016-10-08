import {platformBrowser} from '@angular/platform-browser';

import { NgbdAotModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(NgbdAotModuleNgFactory);