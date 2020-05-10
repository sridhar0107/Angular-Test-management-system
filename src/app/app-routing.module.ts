import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { ListTestComponent } from './list-test/list-test.component';




const routes: Routes = [{path:'listtest',component:ListTestComponent},
{path:'addtest',component:AddTestComponent},
{path:'updatetest',component:UpdateTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
