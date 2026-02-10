import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Course {
  id: number;
  name: string;
  level: string;
  instructor: string;
  duration: string;
  price: string;
  description: string;
}

export interface ScheduleClass {
  time: string;
  course: string;
  instructor: string;
  room: string;
}

export interface DaySchedule {
  day: string;
  classes: ScheduleClass[];
}

export interface SchoolInfo {
  schoolName: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  about: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('assets/data/courses.json');
  }

  getSchedule(): Observable<DaySchedule[]> {
    return this.http.get<DaySchedule[]>('assets/data/schedule.json');
  }

  getSchoolInfo(): Observable<SchoolInfo> {
    return this.http.get<SchoolInfo>('assets/data/school-info.json');
  }
}
