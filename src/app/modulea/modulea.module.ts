import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    ModuleaComponent,
    // ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule
  ]
})
export class ModuleaModule { }
