import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Enrollment {
  id?: number;
  name: string;
  course: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  
}