import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path:'',component:AppComponent,children:[

      {path:"",redirectTo:"book",pathMatch:"full"},

      {path:"book",loadChildren:()=>

         import("./book/book.module").then(
        (m)=>m.BookModule
      )
    },

    ]
  },
  {path:"**",component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
