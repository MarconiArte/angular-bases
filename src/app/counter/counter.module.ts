import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/Counter.component';



@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule {

}
