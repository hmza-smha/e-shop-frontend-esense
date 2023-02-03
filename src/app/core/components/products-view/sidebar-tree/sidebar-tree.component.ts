import { Component, OnInit } from '@angular/core';



interface Category {
  name: string;
  subcategories?: Category[];
}

@Component({
  selector: 'app-sidebar-tree',
  templateUrl: './sidebar-tree.component.html',
  styles: [
    `
      li {
        cursor: pointer
      }
      li:hover {
        background-color: inherit !important;
      }
    `,
  ],
})

export class SidebarTreeComponent implements OnInit {
  constructor() {}

  categories: Category[] = [
    {
      name: 'Cars',
      subcategories: [
        {
          name: 'BMW',
        },
        {
          name: 'Honda',
        },
      ],
    },
    {
      name: 'Mens',
      subcategories: [
        {
          name: 'Jeans',
          subcategories: [
            {
              name: 'Classic 1'
            },
            {
              name: 'Classic 2'
            }
          ],
        },
        {
          name: 'T-Shirt',
        },
      ],
    },
    {
      name: 'Women',
      subcategories: [
        {
          name: 'Jeans',
        },
        {
          name: 'T-Shirt'
        },
      ],
    },
    {
      name: 'Kids',
      subcategories: [
        {
          name: 'Jeans',
          subcategories: [
            {
              name: 'Jeans',
            },
            {
              name: 'T-Shirt'
            },
          ],
        },
        {
          name: 'T-Shirt'
        },
      ],
    },
  ];

  ngOnInit(): void {}

  fetchCategory(name: string){
    console.log("Fetching...", name);
  }
}
