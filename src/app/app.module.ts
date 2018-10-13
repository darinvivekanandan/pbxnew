import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ExtensionComponent,ExtensionDialog } from './views/extension/extension.component';
import { AuthService } from './views/login/auth.service';
import { AuthGuard } from './views/login/auth.guard';
import { AuthService1 } from './views/login/auth.service1';
import { AuthGuard1 } from './views/login/auth.guard1';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RingComponent,RingDialog } from './views/ring/ring.component';
import { AccountComponent,DialogOverviewExampleDialog } from './views/account/account.component';
import { InboundComponent,InboundDialog } from './views/inbound/inbound.component';
import { TrunkComponent,TrunkDialog } from './views/trunk/trunk.component';
import {
  MatFormFieldModule,
 MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent,DefaultLayout1Component } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { OutboundComponent,OutboundDialog } from './views/outbound/outbound.component';
import { ReceptionistComponent,ReceptionistDialog,WavDialog } from './views/receptionist/receptionist.component';


const APP_CONTAINERS = [
  DefaultLayoutComponent,
  DefaultLayout1Component
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserComponent } from './views/user/user.component';
import{UserModule} from './views/user/user.module';
import{RestaurantModule} from './views/restaurant/restaurant.module';

import { RestaurantComponent } from './views/restaurant/restaurant.component';


@NgModule({
  exports:[
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    RestaurantModule
  ],entryComponents: [TrunkComponent,TrunkDialog,RingComponent,RingDialog,ReceptionistComponent,ReceptionistDialog,WavDialog,OutboundComponent,OutboundDialog,InboundComponent,InboundDialog,ExtensionComponent, ExtensionDialog,AccountComponent,DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule, 
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    FormsModule,
    UserModule,
    MatFormFieldModule,
    RestaurantModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RestaurantComponent,
    ExtensionComponent,
    ExtensionDialog,
    AccountComponent,
    DialogOverviewExampleDialog,
    InboundComponent,
    InboundDialog,
    OutboundComponent,OutboundDialog,
    ReceptionistComponent,ReceptionistDialog,WavDialog,
    RingComponent,RingDialog,
    TrunkComponent,TrunkDialog
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  
  },FormBuilder,
  AuthService,
    AuthGuard, AuthService1,
    AuthGuard1],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
