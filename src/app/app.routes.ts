import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ManageComponent } from './manage/manage.component';

export const routes: Routes = [
     {path: '', redirectTo: '/home', pathMatch: 'full'},
     {path: 'home', component: HomeComponent},
     {path: 'search', component: SearchComponent},
     {path: 'manage', component: ManageComponent}
];
