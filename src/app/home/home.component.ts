import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

/** @title Fixed sidenav */
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {

  constructor(private router: Router){}

  navigateToMain(){
    this.router.navigate(['main']);
  }
  
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */