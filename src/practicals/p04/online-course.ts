export class OnlineCourse {
  courseName: string;
  maxStudents: number;
  private enrolledStudents: number;
  private isOpen: boolean;

  constructor(courseName: string, maxStudents: number) {
    this.courseName = courseName;
    this.maxStudents = maxStudents;
    this.enrolledStudents = 0;
    this.isOpen = true;
  }

  private canEnroll(): boolean {
    return this.isOpen && this.enrolledStudents < this.maxStudents;
  }

  enroll(): boolean {
    if (this.canEnroll()) {
      this.enrolledStudents++;
      return true;
    }
    return false;
  }

  closeCourse(): void {
    this.isOpen = false;
  }

  getAvailableSeats(): number {
    return this.maxStudents - this.enrolledStudents;
  }

  getCourseStatus(): string {
    if (this.isOpen) {
      return "Open";
    }
    return "Closed";
  }
}