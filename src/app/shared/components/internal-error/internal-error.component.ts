import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-internal-error',
  templateUrl: './internal-error.component.html',
  styleUrls: ['./internal-error.component.scss']
})
export class InternalErrorComponent {
  @Input('err') err: any;
}
