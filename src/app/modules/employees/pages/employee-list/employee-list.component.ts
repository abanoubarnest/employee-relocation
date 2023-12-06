import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EMPLOYEE_DATA } from '../../models/employee-data';
import { MatDialog } from '@angular/material/dialog';
import { RelocationEmployeeComponent } from '../relocation-employee/relocation-employee.component';
import { Employee } from '../../models/employee';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['id', 'name', 'department', 'skills', 'performance', 'actions'];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);
  constructor(private dialogRef: MatDialog, private cdr:ChangeDetectorRef,private snackbarService: SnackbarService) { }
  relocationEmployee(row:Employee, i:number):void {
    const dialogRef = this.dialogRef.open(RelocationEmployeeComponent, {
      width: '50rem',
      height: '16rem',
      data:{ department: row.department}
    });
    dialogRef.afterClosed().subscribe((department?: string) => {
      if (department!) {
        this.dataSource.data.at(i)!.department = department!;
        this.snackbarService.openSnackBarSuccess('update successfully');

        this.cdr.detectChanges();
      }
    });
  }
  onSearchWith(val:string):void{
    this.dataSource.filter = val?.trim().toLowerCase();
  }
}
