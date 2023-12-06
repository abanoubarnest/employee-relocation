import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule} from './employees-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { RelocationEmployeeComponent } from './pages/relocation-employee/relocation-employee.component';


@NgModule({
  declarations: [EmployeeListComponent, RelocationEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule.forRoot(),
  ],
})
export class EmployeeModule { }
