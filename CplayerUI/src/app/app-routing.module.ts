import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerlistComponent } from 'src/app/Player/playerlist/playerlist.component';
import { PlayerDetailsComponent } from 'src/app/Player/player-details/player-details.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavbarComponent } from './Player/navbar/navbar.component';
import { AuthGuard } from './auth.guard';

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
    //canActivate:[AuthGuard]
  },
  {
    path:'PlayerDetails/:id',
    component: PlayerDetailsComponent,
   // canActivate:[AuthGuard]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlayerDetailsComponent,PlayerDetailsComponent]