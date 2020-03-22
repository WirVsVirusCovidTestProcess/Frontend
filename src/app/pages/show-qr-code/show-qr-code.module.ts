import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShowQrCodePage } from './show-qr-code';
import { QrCodeViewComponent } from '../../components/qrcode-view/qrcode-view';
import { SharedModule } from '../../app.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule.forRoot()
  ],
  declarations: [
    ShowQrCodePage,
    QrCodeViewComponent
  ],
  entryComponents: [ShowQrCodePage],
})
export class ShowQrCodeModule {}
