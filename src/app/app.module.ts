import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlgorithmsPageComponent } from './algorithms-page/algorithms-page.component';
import { SearchingAlgorithmsComponent } from './searching-algorithms/searching-algorithms.component';

  const routes: Routes = [
    { path: 'algorithms', component: AlgorithmsPageComponent},
    { path: 'searchingAlgorithms', component: SearchingAlgorithmsComponent}
    //{ path: 'machine-learning', component: AppComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlgorithmsPageComponent,
    SearchingAlgorithmsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
