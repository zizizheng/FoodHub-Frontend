import { DonationListService } from './service/donationList.service';
import { LoginService } from './service/login.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule,  [ LoginService ]);
