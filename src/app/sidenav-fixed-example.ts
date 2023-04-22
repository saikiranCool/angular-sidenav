import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/**  Fixed sidenav */
@Component({
  selector: 'sidenav-fixed-example',
  templateUrl: 'sidenav-fixed-example.html',
  styleUrls: ['sidenav-fixed-example.css'],
})
export class SidenavFixedExample {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {
    this.dataSource.data = TREE_DATA;
  }

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */