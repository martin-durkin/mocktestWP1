import { Routes } from '@angular/router';
import { Displaydetails } from './displaydetails/displaydetails';
import { About } from './about/about';

export const routes: Routes = [
    {path: '', component: Displaydetails},
    {path: 'about', component: About}
];
