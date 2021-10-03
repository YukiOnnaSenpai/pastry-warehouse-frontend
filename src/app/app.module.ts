import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplyComponent } from './components/supply/supply.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { WorkOrderComponent } from './components/work-order/work-order.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductEmployeeService } from './services/product-employee/product-employee.service';
import { SupplyService } from './services/supply/supply.service';
import { WorkOrderService } from './services/work-order/work-order.service';

const Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'supply', component: SupplyComponent},
  {path: 'workOrder', component: WorkOrderComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    SupplyComponent,
    EmployeeComponent,
    WorkOrderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule,
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatGridListModule, 
    MatExpansionModule, 
    MatSortModule, 
    MatTableModule,
    MatToolbarModule, 
    // MatSelectModule, 
    // MatOptionModule,
    // MatSnackBarModule, 
    MatDialogModule, 
    MatInputModule,
    // MatCheckboxModule, 
    MatPaginatorModule, 
    MatSortModule
  ],
  providers: [ProductEmployeeService, SupplyService, WorkOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
