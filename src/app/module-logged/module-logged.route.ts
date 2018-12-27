import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
// import { HomeComponent } from './home/home.component';
import { LoggedGuard } from '../guard/logged.guard';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from '../login/login.component';
const loggedRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loggedRoutes)],
    exports: [RouterModule],
    providers: [
        LoggedGuard,
    ]
})

export class ModuleLoggedRoutes { }
