import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerlistComponent } from 'src/app/Player/playerlist/playerlist.component';
import { PlayerDetailsComponent } from 'src/app/Player/player-details/player-details.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavbarComponent } from './Player/navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './Player/dashboard/dashboard.component';
import { UpdateComponent } from './authentication/update/update.component';

const routes: Routes = [


 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'Playerlist',
    component:PlayerlistComponent,
<<<<<<< HEAD
    //canActivate:[AuthGuard]
=======
    // canActivate:[AuthGuard]
>>>>>>> 70ff0704485176bd4ebb853f5a260117e0681c89
  },
  {
    path:'PlayerDetails/:id',
    component: PlayerDetailsComponent,
<<<<<<< HEAD
   // canActivate:[AuthGuard]
=======
    // canActivate:[AuthGuard]
  },
  {
    path:'UserProfile',
    component:DashboardComponent
  },
  {
    path:'update',
    component:UpdateComponent
>>>>>>> 70ff0704485176bd4ebb853f5a260117e0681c89
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlayerDetailsComponent,PlayerDetailsComponent]