import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EcomHeaderComponent } from './ecom-header/ecom-header.component';
import { MarketingCarouselComponent } from './marketing-carousel/marketing-carousel.component';
import { QuickDashboardComponent } from './quick-dashboard/quick-dashboard.component';
import { RecentlyViewedComponent } from './quick-dashboard/recently-viewed/recently-viewed.component';
import { ShopByCategoryComponent } from './quick-dashboard/shop-by-category/shop-by-category.component';
import { DealAndPromotionsComponent } from './quick-dashboard/deal-and-promotions/deal-and-promotions.component';
import { UserRecommendationComponent } from './quick-dashboard/user-recommendation/user-recommendation.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyProductComponent } from './my-product/my-product.component';
import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PRIMENG MODULES
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AccountComponent } from './account/account.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';

//Injectable
import { APIInterceptor } from '../app/Injectable/APIInterceptor';
import { AuthService } from '../app/Injectable/AuthService';
import { NotificationService } from './Injectable/NotificationService';
import { MessageService, ConfirmationService } from 'primeng/api';
//Guard

import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultViewComponent } from './search-result-view/search-result-view.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EcomHeaderComponent,
    MarketingCarouselComponent,
    QuickDashboardComponent,
    RecentlyViewedComponent,
    ShopByCategoryComponent,
    DealAndPromotionsComponent,
    UserRecommendationComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomepageComponent,
    MyProductComponent,
    ChatComponent,
    AccountComponent,
    EditDetailsComponent,
    SearchResultComponent,
    SearchResultViewComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FileUploadModule,
    ToastModule,
    DropdownModule,
    ToolbarModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ImageModule,
    RatingModule,
    CarouselModule,
    CardModule,
    InputNumberModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    AuthService,
    NotificationService,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
