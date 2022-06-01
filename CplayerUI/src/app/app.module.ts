import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Player/dashboard/dashboard.component';
import { NavbarComponent } from './Player/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Player/footer/footer.component';
import { PlayerlistComponent } from './Player/playerlist/playerlist.component';
import { PlayerDetailsComponent } from './Player/player-details/player-details.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MaterialsModule} from 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    PlayerlistComponent,
    PlayerDetailsComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule ,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
