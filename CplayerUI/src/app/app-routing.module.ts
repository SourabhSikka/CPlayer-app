import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerlistComponent } from 'src/app/Player/playerlist/playerlist.component';
import { PlayerDetailsComponent } from 'src/app/Player/player-details/player-details.component';

const routes: Routes = [
  {path:'Playerlist',component:PlayerlistComponent},
  {path:'PlayerDetails/:id',component: PlayerDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[PlayerDetailsComponent,PlayerDetailsComponent]