import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LayoutDefaultComponent } from './default/default.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { HeaderSearchComponent } from './default/header/components/search.component';
import { HeaderNotifyComponent } from './default/header/components/notify.component';
import { HeaderTaskComponent } from './default/header/components/task.component';
import { HeaderIconComponent } from './default/header/components/icon.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderI18nComponent } from './default/header/components/i18n.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderUserComponent } from './default/header/components/user.component';

import { SettingDrawerComponent } from './default/setting-drawer/setting-drawer.component';
import { SettingDrawerItemComponent } from './default/setting-drawer/setting-drawer-item.component';

//#region Abp
import { AbpModule } from '@core/abp/abp.module';
import { TenantChangeComponent } from './passport/tenant-change.component';
import { TenantChangeModalComponent } from './passport/tenant-change-modal.component';

const ABP_COMPONENTS = [
  TenantChangeComponent,
  TenantChangeModalComponent
];
//#endregion

const SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent, TenantChangeModalComponent];

const COMPONENTS = [
  LayoutDefaultComponent,
  LayoutFullScreenComponent,
  HeaderComponent,
  SidebarComponent,
  ...SETTINGDRAWER
];

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderStorageComponent,
  HeaderUserComponent
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [
  LayoutPassportComponent
];

@NgModule({
  imports: [SharedModule, AbpModule],
  entryComponents: SETTINGDRAWER,
  declarations: [
    ...COMPONENTS,
    ...HEADERCOMPONENTS,
    ...PASSPORT,
    ...ABP_COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    ...PASSPORT,
    ...ABP_COMPONENTS
  ]
})
export class LayoutModule { }
