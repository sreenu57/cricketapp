import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightsComponent } from './highlights/highlights.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PointstableComponent } from './pointstable/pointstable.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'pointstable',component:PointstableComponent},
  {path:'highlights',component:HighlightsComponent},
  {path:'teams',component:TeamsComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
