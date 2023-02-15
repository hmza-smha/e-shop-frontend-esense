
import {Component, Input} from '@angular/core';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator',
  templateUrl: 'paginator.component.html',
})
export class PaginatorComponent {

  @Input() length: any;
  @Input() pageSize: any;
  

}

