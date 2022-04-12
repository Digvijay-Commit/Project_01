import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DigvijayComponent } from './digvijay/digvijay.component';
import { DvComponent } from './dv/dv.component';
import { NComponent } from './n/n.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { KpComponent } from './kp/kp.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { TempletFormComponent } from './templet-form/templet-form.component';
import { ReactiveFormComponent } from './modulea/reactive-form/reactive-form.component';
import { ModuleaComponent } from './modulea/modulea.component';

@NgModule({
  declarations: [
    AppComponent,
    DigvijayComponent,
    DvComponent,
    NComponent,
    ParentComponent,
    ChildComponent,
    KpComponent,
    TestComponent,
    BindingComponent,
    TempletFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
