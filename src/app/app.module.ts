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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { ProductEmployeeService } from './services/product-employee/product-employee.service';
import { SupplyService } from './services/supply/supply.service';
import { WorkOrderService } from './services/work-order/work-order.service';
import { SupplyDialogComponent } from './dialogs/supply-dialog/supply-dialog.component';
import { ProductEmployeeDialogComponent } from './dialogs/product-employee-dialog/product-employee-dialog.component';
import { WorkOrderDialogComponent } from './dialogs/work-order-dialog/work-order-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { RecipeDialogComponent } from './dialogs/recipe-dialog/recipe-dialog.component';
import { IngredientDialogComponent } from './dialogs/ingredient-dialog/ingredient-dialog.component';

const Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'supply', component: SupplyComponent },
  { path: 'workOrder', component: WorkOrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SupplyComponent,
    EmployeeComponent,
    WorkOrderComponent,
    HomeComponent,
    AboutComponent,
    SupplyDialogComponent,
    ProductEmployeeDialogComponent,
    WorkOrderDialogComponent,
    RecipeDialogComponent,
    IngredientDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule, 
    // MatOptionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    // MatCheckboxModule, 
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule
  ],
  exports: [RouterModule],
  providers: [ProductEmployeeService, SupplyService, WorkOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
