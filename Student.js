"use strict";

function nameSorted(stu1, stu2) {
  if (stu1.getName() <= stu2.getName()) {
    return -1;
  }
  if (stu1.getName() >= stu2.getName()) {
    return 1;
  }
  if (stu1.getName() === stu2.getName()) {
    if (stu1.getAverage() <= stu2.getAverage()) {
      return -1;
    }
    if (stu1.getAverage() >= stu2.getAverage()) {
      return 1;
    }
  }
}

class Student {
  name;
  age;
  math;
  physical;
  chemistry;
  avg;
  rank;

  constructor(name, age, math, physical, chemistry) {
    this.name = name;
    this.age = age;
    this.math = math;
    this.physical = physical;
    this.chemistry = chemistry;
  }

  getName() {
    return this.name;
  }

  getRank() {
    return this.rank;
  }

  getAverage() {
    return this.avg;
  }

  countRank(averagePoint) {
    if (Number(averagePoint) >= 8) {
      return "GIOI";
    }
    if (Number(averagePoint) >= 6.5 && Number(averagePoint) < 8) {
      return "KHA";
    }
    if (Number(averagePoint) >= 5 && Number(averagePoint) < 6.5) {
      return "TB";
    }
    return "YEU";
  }

  setAverage() {
    const averagePoint =
      (Number(this.math) + Number(this.physical) + Number(this.chemistry)) / 3;
    this.avg = averagePoint;
  }

  setRank() {
    const rank = this.countRank(this.avg);
    this.rank = rank;
  }
}

class ManagerStudent {
  students;
  constructor(listStudent) {
    this.students = listStudent;
  }

  setStudents(listStudent) {
    this.students = listStudent;
  }

  findByName(name) {
    if (typeof name !== "string") {
      return "Invalid Student Name";
    }
    let existedName = "";
    if (Array.isArray(this.students)) {
      const expectedResult = this.students.filter(
        (student) => String(student.getName()) === name
      );

      if (expectedResult.length !== 0) {
        existedName = name;
      }
    }

    if (!existedName) {
      return "This name haven't match our record";
    }

    return `We have found out one record match: ${existedName}`;
  }

  getRankGioi() {
    const destinationRank = "GIOI";
    if (Array.isArray(this.students)) {
      return this.students.filter(
        (student) => student.getRank() === destinationRank
      );
    }
  }

  reAlignStudent() {
    this.setStudents(this.students.sort(nameSorted));
  }

  smartSearch(content) {
    const rank = {
      HIGHTEST: 10,
      MEDIUM: 9,
      FIXED: 8,
    };

    const hightestExpectation = this.students.filter(
      (student) => student.getName() === content
    );

    if (hightestExpectation.length !== 0) {
      return [hightestExpectation, rank.HIGHTEST];
    }

    const mediumExpectation = this.students.map((student) =>
      String(student.getName()).includes(content)
    );

    if (mediumExpectation.length !== 0) {
      return [mediumExpectation, rank.MEDIUM];
    }
  }
}

//A. Gen 8 new Student
const s1 = new Student("H", 16, 7, 8, 9);
const s2 = new Student("B", 16, 7, 5, 6);
const s3 = new Student("C", 16, 6, 8, 4);
const s4 = new Student("Z", 16, 3, 8, 7);
const s5 = new Student("E", 16, 6, 8, 7);
const s6 = new Student("F", 16, 6, 8, 5);
const s7 = new Student("G", 16, 10, 8, 3);
const s8 = new Student("A", 16, 7, 3, 9);

//B. Count Average point and ranking
s1.setAverage();
s2.setAverage();
s3.setAverage();
s4.setAverage();
s5.setAverage();
s6.setAverage();
s7.setAverage();
s8.setAverage();

s1.setRank();
s2.setRank();
s3.setRank();
s4.setRank();
s5.setRank();
s6.setRank();
s7.setRank();
s8.setRank();

//C. Find Student By Name
const manager = new ManagerStudent([s1, s2, s3, s4, s5, s6, s7, s8]);
// console.log(manager.findByName("A"));

//D. Sort rank equal GIOI
// console.log(manager.getRankGioi());

//E.Sort student with alphabetical and total point
// manager.reAlignStudent();
// console.log("manager: ", manager);

//F. Smart Search
manager.smartSearch("A");
