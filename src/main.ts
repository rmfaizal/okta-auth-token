import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-2xlyhzwr7rpiwjnn.us.auth0.com',
      clientId: '9tP4AHgauZI4kJ7oVJFuG2PwjnRlB6bu',
      authorizationParams: {
        redirect_uri: 'https://rmfaizal.github.io/okta-auth-token',
      },
      cacheLocation: 'memory',
      useRefreshTokens: true,
    }),
  ],
});
