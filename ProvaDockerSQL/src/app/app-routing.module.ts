import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'Categoria', component: CategoriaComponent },
  { path: 'Verifiche', component: VerificaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [LoginComponent, CategoriaComponent, VerificaComponent, PageNotFoundComponent]
})
export class AppRoutingModule { }
