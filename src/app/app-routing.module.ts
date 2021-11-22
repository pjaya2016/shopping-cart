import { CartComponent } from './cart/cart.component';
import { SearchResultViewComponent } from './search-result-view/search-result-view.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { MyProductComponent } from './my-product/my-product.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gurad/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'index', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'my-product', component: MyProductComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'account', component: AccountComponent },
  { path: 'edit-detail', component: EditDetailsComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'search-result-view', component: SearchResultViewComponent },
  { path: 'cart', component: CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
