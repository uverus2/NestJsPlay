import { Injectable } from '@nestjs/common';
import { teachers } from './../../db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((i) => i.id === teacherId);
  }

}