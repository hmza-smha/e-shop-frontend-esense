import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(searchForm){
    console.log("Searching....", searchForm.form.value);
  }

}
