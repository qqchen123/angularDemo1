import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoodsComponent } from './components/goods/goods.component';
import { TransitionComponent } from './components/transition/transition.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';
import { RequestComponent } from './components/request/request.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { OrdercontentComponent } from './components/ordercontent/ordercontent.component';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { WelcomeComponent } from './components/index/welcome/welcome.component';
import { SettingsComponent } from './components/index/settings/settings.component';
import { PcateComponent } from './components/product/pcate/pcate.component';
import { PlistComponent } from './components/product/plist/plist.component';
const routes: Routes = [
  { path: 'transition', component: TransitionComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'form', component: FormComponent },
  { path: 'newscontent', component: NewscontentComponent },
  { path: 'order', component: OrderComponent },
  { path: 'ordercontent/:aid', component: OrdercontentComponent },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'setting', component: SettingsComponent },
      { path: '**', redirectTo: 'welcome' },
    ],
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'pcate', component: PcateComponent },
      { path: 'plist', component: PlistComponent },
      { path: '**', redirectTo: 'pcate' },
    ],
  },

  /*匹配不到路由时 */
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
