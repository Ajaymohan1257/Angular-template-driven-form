import { formModel } from './../formModel.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  genders : any[] = ["Male", "Female"];
  courses : any[] = ["Java", "Spring", "Angular", "React"];
  submitted = false

  model : formModel = {
    name : "",
    email : "",
    gender : "",
    city : "",
    course : "",
    terms : false
  }

  constructor(){
  }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm){
    console.log(f.value);
    this.submitted = true;
  }

}

