import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { FORM_PROVIDERS } from '@angular/common';
import { appRouterProviders } from './app.routes';


bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  FORM_PROVIDERS
])
.catch(err => console.error(err));
