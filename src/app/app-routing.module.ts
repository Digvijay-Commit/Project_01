import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DvComponent } from './dv/dv.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DigvijayComponent } from './digvijay/digvijay.component';
import { NComponent } from './n/n.component';
import { KpComponent } from './kp/kp.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { TempletFormComponent } from './templet-form/templet-form.component';
import { ReactiveFormComponent } from './modulea/reactive-form/reactive-form.component';
// import { TempletFormComponent } from './templet-form/templet-form.component';

const routes: Routes = [
  {path: "dv", component: DvComponent },
  {path: "child", component: ChildComponent },
  {path: "parent", component: ParentComponent },
  {path: "n", component: NComponent },
  {path: "kp", component: KpComponent },
  {path: "digvijay", component: DigvijayComponent },
  {path: "test", component: TestComponent },
  {path: "templetform", component: TempletFormComponent },
  {path: "reactiveform", component: ReactiveFormComponent },
  {path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  {path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) },
  {path: "binding", component: BindingComponent },
  {path: '', redirectTo: 'AppComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
