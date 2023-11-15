import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import mockServer from "./app/mock/app.mock";

mockServer();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
