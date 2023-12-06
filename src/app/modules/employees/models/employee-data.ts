import { DepartmentEnum } from "./department.enum";
import { Employee } from "./employee";

export const  EMPLOYEE_DATA: Employee[] = [
  {id: 1, name: 'John', department: DepartmentEnum.IT , skills:'OOP', performance:'high' },
  {id: 2, name: 'Kavin', department : DepartmentEnum.Sales ,skills:'C#',performance:'low'  },
  {id: 3, name: 'Luman', department: DepartmentEnum.IT ,skills:'Java',performance:'normal'  },
  {id: 4, name: 'Jeff', department: DepartmentEnum.Development ,skills:'Angular',performance:'high'   },
  {id: 5, name: 'Ukon',department: DepartmentEnum.Marketing ,skills:'React', performance:'low' },
  {id: 6, name: 'Lilo', department: DepartmentEnum.IT ,skills:'Vue js',performance:'low'  },
  {id: 7, name: 'Falcon', department : DepartmentEnum.Marketing,skills:'JavaScript',performance:'high'  },
  {id: 8, name: 'Elon', department : DepartmentEnum.IT,skills:'Angular',performance:'high'  },
  {id: 9, name: 'Steve', department: DepartmentEnum.Sales, skills:'ASP.net',performance:'high' },
];
