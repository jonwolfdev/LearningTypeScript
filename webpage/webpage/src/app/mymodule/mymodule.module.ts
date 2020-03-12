import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildcomponentComponent } from '../childcomponent/childcomponent.component';
import { MycustompipePipe } from '../mycustompipe.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChildcomponentComponent,
    MycustompipePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChildcomponentComponent, MycustompipePipe]
})
export class MymoduleModule { }
