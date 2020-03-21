import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account';
import { AccountPageRoutingModule } from './account-routing.module';
import { ShowQrCodePage } from '../show-qr-code/show-qr-code';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeViewComponent } from '../../components/qrcode-view/qrcode-view';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountPageRoutingModule,
    QRCodeModule
  ],
  declarations: [
    AccountPage,
    ShowQrCodePage,
    QrCodeViewComponent
  ]
})
export class AccountModule { }
