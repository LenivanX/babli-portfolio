import { Routes } from '@angular/router';
import { Mia } from './mia/mia';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'mia', component: Mia },
];