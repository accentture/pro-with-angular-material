import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const componentes = [
  MatButtonModule
]

@NgModule({
  imports: [componentes],
  exports: [componentes]
})
export class MaterialModule { }
