import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../login/login.component';
const loggedRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        // canActivateChild: [LoggedGuard],
        children: [
            {
                path: '',
                // canActivateChild: [LoggedGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'dashboard',

                    },
                ]
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(loggedRoutes)],
    exports: [RouterModule]
})

export class ModuleLoggedRoutes { }
