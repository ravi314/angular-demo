import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CoursesComponent } from './courses/courses.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DisplayComponent } from './display/display.component';
import { NgdirectiveComponent } from './ngdirective/ngdirective.component';
import { PanelComponent } from './panel/panel.component';
import { DetailsComponent } from './details/details.component';
import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AboutComponent } from './about/about.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StateComponent } from './state/state.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { RformComponent } from './rform/rform.component';
import { ConfirmNavigationService } from './confirm-navigation.service';
import { ActivateCheckService } from './activate-check.service';
import { PhoneformatterDirective } from './phoneformatter.directive';
import { FormatPipe } from './format.pipe';
import { SortPipe } from './sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { IAppStore, rootReducer } from './IAppStore';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import { ReduxDemoComponent } from './redux-demo/redux-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SidebarComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    CoursesComponent,
    ChildComponent,
    ParentComponent,
    DisplayComponent,
    NgdirectiveComponent,
    PanelComponent,
    DetailsComponent,
    NotFoundComponent,
    NavbarComponent,
    CourseDetailsComponent,
    AboutComponent,
    CourseListComponent,
    AddCourseComponent,
    StateComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    RformComponent,
    PhoneformatterDirective,
    FormatPipe,
    SortPipe,
    UserComponent,
    ReduxDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      {
        path:'', 
        component:CoursesComponent
      },
      {
        path:'courses',
        component:CoursesComponent,
        children:[
          {
            path:'',
            component:CourseListComponent
          },
          {
            path:'add',
            component:AddCourseComponent,
            canDeactivate:[ConfirmNavigationService]
          },
          {
            path:'list',
            component:CourseListComponent
          },
          {
            path:'rform',
            component:RformComponent
          },
        ]
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'courses/:id',
        component:CourseDetailsComponent,
        canActivate:[ActivateCheckService]
      },
      {
        path:'state',
        component:StateComponent
      },
      {
        path:'users',
        component:UserComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux:NgRedux<IAppStore>){
    ngRedux.configureStore(rootReducer, {counter:0});
  }
 }
