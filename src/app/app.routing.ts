import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { DefaultLayout1Component } from './containers';
import { AuthGuard } from './views/login/auth.guard';
import { AuthGuard1 } from './views/login/auth.guard1';
import {UserComponent} from './views/user/user.component'

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ExtensionComponent } from './views/extension/extension.component';
import { AccountComponent } from './views/account/account.component';
import { InboundComponent } from './views/inbound/inbound.component';
import { OutboundComponent } from './views/outbound/outbound.component';
import { ReceptionistComponent } from './views/receptionist/receptionist.component';
import { RingComponent,RingDialog } from './views/ring/ring.component';
import { TrunkComponent } from './views/trunk/trunk.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'restaurant',
        loadChildren: './views/restaurant/restaurant.module#RestaurantModule'

      },
      {
        path: 'extension',
        component:ExtensionComponent

      },
      {
        path: 'account',
        component:AccountComponent

      },
      {
        path: 'inbound',
        component:InboundComponent
      },
      {
        path: 'outbound',
        component:OutboundComponent
      },
      {
        path: 'receptionist',
        component:ReceptionistComponent
      },
      {
        path: 'ring',
        component: RingComponent
      },
      {
        path: 'trunk',
        component: TrunkComponent
      }
    ]
  },
  {
    path: '',
    component: DefaultLayout1Component,
    canActivate: [AuthGuard1],
    data: {
      title: 'Home'
    },
    children: [
      {
        path:'user',
        loadChildren:'./views/user/user.module#UserModule'
      }
    ]
  }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
