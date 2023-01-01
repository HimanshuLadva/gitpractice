import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prac-Angu';
  sendData: number = 25;
  data: string = '';
  twoWayBinding: any;
  canSave = true;
  isUnchanged = false; 
  isSpecial = false;
  
  constructor() {
    this.setCurrnetClasses();
  }

  // ngClass directive 
  currentClasses: Record<string, boolean> = {};

  setCurrnetClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }
  
  rActiveForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
  });

  get fname() {
    return this.rActiveForm.get('fname');
  }

  getReactiveFormData() {
    console.log(this.rActiveForm.value);
    
  }
  getDataFromChild(item: string) {
    console.log('thisi is my item', item);
    this.data = item;
  }

  submitData(item: string) {
    this.data = item;
  }

  getFormData(item: any) {
    console.log(item);
  }
}
