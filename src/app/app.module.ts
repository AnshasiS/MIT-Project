import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SideNavigationService } from './services/sidenav.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './Navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { I18nModule } from './i18n/i18n.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule  } from '@angular/material/table';
import { AuthInterceptor } from './auth-interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';
import { InfoComponent } from './info/info.component';
import { LecturesPlanComponent } from './info/lectures-plan/lectures-plan.component';
import { AuthorizationService } from './services/authorization.service';
import { DialogComponent } from './dialog/dialog.component';
import { authorizationGuard } from './login/Auth-guard';
import { NavigationComponent } from './navigation/navigation.component';
import { FreeRoomComponent } from './info/freeRoom/freeRoom.component';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatNativeDateModule }  from '@angular/material/core';
import { MensaComponent } from './info/mensa/mensa.component';
import { ExamsComponent } from './info/exams/exams.component';
import { EventsComponent } from './events/events.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';
import { MatTooltipModule } from '@angular/material/tooltip';



const appRoutes : Routes = [
   {path: 'login', component: LoginComponent},{ path: 'info', component: InfoComponent, canActivate: [authorizationGuard]},
  { path: '', component: BodyComponent}, { path: 'navig', component: NavigationComponent, canActivate: [authorizationGuard]}, {path: 'event', component: EventsComponent},{path: 'nachricht', component: NachrichtenComponent}
]; 

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    LoginComponent,
    InfoComponent,
    LecturesPlanComponent,
    DialogComponent,
    NavigationComponent,
    FreeRoomComponent,
    MensaComponent,
    ExamsComponent,
    EventsComponent,
    NachrichtenComponent,
   
  ],
  entryComponents: [DialogComponent],
  imports: [
    MatTooltipModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    I18nModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
      
    }),
    TranslateCacheModule.forRoot({
cacheService : {
provide : TranslateCacheService,
useFactory: translateCacheFactory,
deps :[TranslateService ,TranslateCacheSettings] 
}, cacheMechanism : 'Cookie' 
    })

  ],
  exports:[ MatPaginatorModule, MatTabsModule, ],
  providers: [SideNavigationService, AuthorizationService, HttpClientModule, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}], authorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  languages = ['en', 'de'];
  constructor( public translate: TranslateService, translateCacheService: TranslateCacheService ) { 
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('de');
     const browserlang =translateCacheService.getCachedLanguage() || this.translate.getBrowserLang();
     this.translate.use(browserlang);
     translateCacheService.init();
     const browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
     
    
 
     
   }

 }



export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}
