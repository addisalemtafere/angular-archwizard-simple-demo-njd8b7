import { Component, ViewChild } from '@angular/core';
import { MovingDirection, WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  getData(){
    this.wizard.wizardSteps._results.forEach(res=>{
      if(res.selected){
        console.log(res.stepTitle, res);
      }
    });
  }
}
