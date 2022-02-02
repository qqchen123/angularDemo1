import { NgModule } from '@angular/core'; /*angular核心模块 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; /*根组件 */
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { AxrequestService } from './services/axrequest.service';
import { GoodsComponent } from './components/goods/goods.component';
import { TransitionComponent } from './components/transition/transition.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';
import { RequestComponent } from './components/request/request.component';

@NgModule({
  /*配置当前项目运行的组件 */
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    GoodsComponent,
    TransitionComponent,
    OrderComponent,
    UserComponent,
    RequestComponent,
  ],
  /*配置当前模块运行依赖的其他模块 */
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  /*配置项目所需要的服务 */
  providers: [StorageService, AxrequestService],
  /*指定应用的主视图（成为根组件）通过引导根Appmodule来启动应用，这里一般写的是根组件 */
  bootstrap: [AppComponent],
})
export class AppModule {}
