import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShowQrCodePage } from './show-qr-code';
import { ShowQrCodePageRoutingModule } from './show-qr-code-routing.module';
import { QrCodeViewComponent } from '../../components/qrcode-view/qrcode-view';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShowQrCodePageRoutingModule,
    QRCodeModule
  ],
  declarations: [
    ShowQrCodePage,
    QrCodeViewComponent,
  ],
  entryComponents: [ShowQrCodePage],
})
export class ShowQrCodeModule {}
