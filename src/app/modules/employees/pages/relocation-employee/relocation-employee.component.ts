import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartmentEnum } from '../../models/department.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-relocation-employee',
  templateUrl: './relocation-employee.component.html',
  styleUrls: ['./relocation-employee.component.scss']
})
export class RelocationEmployeeComponent implements OnInit {
  departmentList = [
    DepartmentEnum.IT,
    DepartmentEnum.Sales,
    DepartmentEnum.Marketing,
    DepartmentEnum.Development,
  ]
  departmentForm: FormGroup;
  orgDepartment:string = '';
  constructor(public dialogRef: MatDialogRef<RelocationEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {department:string},   private fb: FormBuilder,) {
      this.departmentForm = this.initForm();
    }

  ngOnInit(): void {
   this.orgDepartment= JSON.parse(JSON.stringify(this.data.department));
    this.department?.setValue(this.data.department)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(this.department?.value);
  }
  trackBy(index: number): number {
    return index;
  }
  get department(){
    return this.departmentForm.get('department');
  }
  initForm():FormGroup {
    return this.fb.group(
      {

        department: ['', [Validators.required]],
      },
    );
  }
}
