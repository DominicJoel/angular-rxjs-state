import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Node } from "../../models/node.model";
import { BlockNodeStoreService } from "../services/block-node-store.service";

@Component({
  selector: "app-node-item",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.scss"],
})
export class NodeComponent implements OnInit {
  @Input() node: Node;
  @Output() ToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;
  unknownNode = "Server Off";

  constructor(public store: BlockNodeStoreService) {}

  loadNodeBlocks(nodeUrl: string) {
    this.store.getNodeBlocks(nodeUrl);
  }

  handleToogleExpand(node: Node): void {
    this.ToogleExpand.emit(node);
  }

  ngOnInit() {
    var enrollments1 = [
      ["58", "Linear Algebra"],
      ["94", "Art History"],
      ["94", "Operating Systems"],
      ["17", "Software Design"],
      ["58", "Mechanics"],
      ["58", "Economics"],
      ["17", "Linear Algebra"],
      ["17", "Political Science"],
      ["94", "Economics"],
      ["25", "Economics"],
      ["58", "Software Design"],
    ];
    this.getDifferentStudent(enrollments1);
  }

  /* You are a developer for a university. Your current project is to develop a system for students to find courses 
  they share with friends. The university has a system for querying courses students are enrolled in, returned as a 
  list of (ID, course) pairs.
  
  Write a function that takes in a collection of (student ID number, course name) pairs and returns, 
  for every pair of students, a collection of all courses they share.
  
  
  Sample Input:
  
  enrollments1 = [
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
    ["58", "Software Design"],
  ]
  
  Sample Output (pseudocode, in any order):
  
  find_pairs(enrollments1) =>
  {
    "58,17": ["Software Design", "Linear Algebra"]
    "58,94": ["Economics"]
    "58,25": ["Economics"]
    "94,25": ["Economics"]
    "17,94": []
    "17,25": []
  }
  
  
  
  Additional test cases:
  
  Sample Input:
  
  enrollments2 = [
    ["0", "Advanced Mechanics"],
    ["0", "Art History"],
    ["1", "Course 1"],
    ["1", "Course 2"],
    ["2", "Computer Architecture"],
    ["3", "Course 1"],
    ["3", "Course 2"],
    ["4", "Algorithms"]
  ]
  
  
  Sample output:
  
  find_pairs(enrollments2) =>
  {
    "1,0":[]
    "2,0":[]
    "2,1":[]
    "3,0":[]
    "3,1":["Course 1", "Course 2"]
    "3,2":[]
    "4,0":[]
    "4,1":[]
    "4,2":[]
    "4,3":[]
  } 
  
  Sample Input:
  enrollments3 = [
    ["23", "Software Design"], 
    ["3", "Advanced Mechanics"], 
    ["2", "Art History"], 
    ["33", "Another"],
  ]
  
  
  Sample output:
  
  find_pairs(enrollments3) =>
  {
    "23,3": []
    "23,2": []
    "23,33":[]
    "3,2":  []
    "3,33": []
    "2,33": []
  }
  
  All Test Cases:
  find_pairs(enrollments1)
  find_pairs(enrollments2)
  find_pairs(enrollments3)
  
  Complexity analysis variables:
  
  n: number of student,course pairs in the input
  s: number of students
  c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant) */

  getDifferentStudent(students: any[]) {
    var studentsId: any[] = [];
    students.map((x) => {
       // console.log(x[0]);
        //console.log(x[1]);
        console.log(x[1]);
      //  if( x[0] === studentsId[i] )
        //console.log(x);
        // var prueba = {
        //   studentId = x
        // }
      });

    for (var i = 0; i < students.length; i++) {
      if (i === 0) studentsId.push(students[i][0]);
      else if (!studentsId.find((x) => x == students[i][0]))
        studentsId.push(students[i][0]);
    }

    // console.log(studentsId)
    // pairStudentsId(studentsId);

    this.matchClasses(this.pairStudentsId(studentsId, students), students);
  }

  pairStudentsId(studentsId: any[], prueba): any[] {
    var studentsPair = [];
    var studentsToPair = [...studentsId];

    console.log(prueba);

    for (var i = 0; i < studentsId.length; i++) {
      for (var x = i; x < studentsToPair.length; x++) {
        var pairValue = {
          studentA: studentsId[i],
          StudentB: studentsToPair[x],
          // subjcts: prueba.map((x) => {
          //   console.log(x[0]);
          //   console.log(x[1]);
          //   if( x[0] === studentsId[i] )
          //   //console.log(x);
          //   // var prueba = {
          //   //   studentId = x
          //   // }
          // });
        };
        studentsPair.push(pairValue);
      }
    }

    //console.log(studentsPair.filter((x) => x.studentA != x.StudentB));
    return studentsPair.filter((x) => x.studentA != x.StudentB);
  }

  matchClasses(studentsPair: any[], studentsClass: any[]) {
    var classMatched: any[];
    var groupClasses: any[] = [];

    //  console.log(studentsPair);
    // console.log(studentsClass);

    for (var i = 0; i < studentsClass.length; i++) {
      var studentClass = {
        studentId: studentsClass[i][0],
        nameClass: studentsClass[i][1],
      };

      groupClasses.push(studentClass);
    }
    //console.log(groupClasses);

    groupClasses.filter((x) => x.studentId == "58" && x.studentId == "94");
    //console.log(groupClasses.filter((x) => x.studentId == "58"));
  }
}
