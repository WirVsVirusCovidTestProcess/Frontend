import {Component, Input} from '@angular/core';

@Component({
  selector: 'qrcode-view',
  templateUrl: 'qrcode-view.html',
})
export class QrCodeViewComponent {
  @Input() data: string;
  constructor() {}
}
