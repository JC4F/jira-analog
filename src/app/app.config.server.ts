import * as projectEffect from '@/stores/project/projects.effects';
import { reducers } from '@/stores/root-store';
import * as authEffect from '@/stores/user/users.effects';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import {
  provideServerRendering,
  ɵSERVER_CONTEXT as SERVER_CONTEXT,
} from '@angular/platform-server';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: SERVER_CONTEXT, useValue: 'ssr-analog' },
    provideStore(reducers),
    provideEffects([authEffect, projectEffect]),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
