import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(searchForm){
    console.log("Searching....", searchForm.form.value);

    // this.activatedRouter.queryParams.subscribe(res => {
    //   console.log('activatedRouter', res);
    //   this.router.navigate(['products'], { queryParams: {...res, textSearch: searchForm.form.value.text } });
    // })

  }

}
