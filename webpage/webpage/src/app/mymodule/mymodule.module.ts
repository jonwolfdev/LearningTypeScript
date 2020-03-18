import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildcomponentComponent } from '../childcomponent/childcomponent.component';
import { MycustompipePipe } from '../mycustompipe.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InnerComponentComponent } from '../inner-component/inner-component.component';
import { SubInnerComponent } from '../sub-inner/sub-inner.component';



@NgModule({
  declarations: [
    ChildcomponentComponent,
    MycustompipePipe,
    InnerComponentComponent,
    SubInnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [{
        path: 'mymod', component: InnerComponentComponent,
        children: [{path: 'second', component: SubInnerComponent}]
      }]
    )
  ],
  exports: [ChildcomponentComponent, MycustompipePipe, RouterModule]
})
export class MymoduleModule { }
