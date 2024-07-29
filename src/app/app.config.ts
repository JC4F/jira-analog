import { quillConfiguration } from '@/constants';
import * as projectEffect from '@/stores/project/projects.effects';
import { reducers } from '@/stores/root-store';
import * as authEffect from '@/stores/user/users.effects';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideQuillConfig } from 'ngx-quill';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(reducers),
    provideEffects([authEffect, projectEffect]),
    provideQuillConfig({
      modules: {
        syntax: true,
        toolbar: quillConfiguration.toolbar,
      },
    }),
  ],
};
