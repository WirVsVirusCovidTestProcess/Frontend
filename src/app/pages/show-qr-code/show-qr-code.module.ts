import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShowQrCodePage } from './show-qr-code';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    ShowQrCodePage,
  ],
  entryComponents: [ShowQrCodePage],
})
export class ShowQrCodeModule {}
