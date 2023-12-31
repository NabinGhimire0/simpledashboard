const dashboard = document.querySelector(".dashboard");
const dashboardLink = document.querySelector(".dashboardlink");

const teacher = document.querySelector(".teacher");
const teacherLink = document.querySelector(".teacher-link");

const student = document.querySelector(".student");
const studentLink = document.querySelector(".student-link");

const faculty = document.querySelector(".faculty");
const facultyLink = document.querySelector(".faculty-link");

const assignment = document.querySelector(".assignment");
const assignmentLink = document.querySelector(".assignment-link");

const feedback = document.querySelector(".feedback");
const feedbackLink = document.querySelector(".feedback-link");

const semester = document.querySelector(".semester");
const semesterLink = document.querySelector(".semester-link");

const subject = document.querySelector(".subject");
const subjectLink = document.querySelector(".subject-link");

// const shrink = document.querySelector(".shrink");
// const span = document.querySelectorAll("span");

const user = document.querySelector(".user");
const userLink = document.querySelector(".user-link");
const sMenu = document.querySelector("#sMenu");
// const cross = require("../images/x")
// const menu = require("../images/hamburger")
// sMenu.style.height="100px"
// sMenu.style.width="100px"
// sMenu.addEventListener("click",function (){
//   // Smenu.src="./images/hamburger.png"
//   console.log("CLICKED")
// })
const navside = document.getElementById("navside");
var sidebar = true;
const hide1 = document.getElementById("hide1")
const hide2 = document.getElementById("hide2")
const hide3 = document.getElementById("hide3")
const hide4 = document.getElementById("hide4")
const hide5 = document.getElementById("hide5")
const hide6 = document.getElementById("hide6")
const hide7 = document.getElementById("hide7")

const logo = document.getElementById("logo");
console.log(span)
sMenu.addEventListener("click", () => {
  navside.classList.toggle("main-content-initial");
  navside.classList.toggle("navWidth");
  logo.classList.toggle("hide");
  console.log("clicked");
  if (sidebar) sMenu.src = "./images/hamburger.png";
  else sMenu.src = "./images/x.png";
  sidebar = !sidebar;
  document.querySelector("#sidebar").classList.toggle("max-width");
  document.querySelector("#sidebar").classList.toggle("min-width");
});

dashboardLink.addEventListener("click", function () {
  dashboard.classList.remove("hide");
  dashboardLink.classList.add("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "dashboard");
});

teacherLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.remove("hide");
  teacherLink.classList.add("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "teacher");
});

studentLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.remove("hide");
  studentLink.classList.add("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "student");
});

facultyLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.remove("hide");
  facultyLink.classList.add("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "faculty");
});

assignmentLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.remove("hide");
  assignmentLink.classList.add("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "assignment");
});

feedbackLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.remove("hide");
  feedbackLink.classList.add("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "feedback");
});

semesterLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.remove("hide");
  semesterLink.classList.add("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "semester");
});

subjectLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.remove("hide");
  subjectLink.classList.add("active-link");

  user.classList.add("hide");
  userLink.classList.remove("active-link");

  localStorage.setItem("contentState", "subject");
});

userLink.addEventListener("click", function () {
  dashboard.classList.add("hide");
  dashboardLink.classList.remove("active-link");

  teacher.classList.add("hide");
  teacherLink.classList.remove("active-link");

  student.classList.add("hide");
  studentLink.classList.remove("active-link");

  faculty.classList.add("hide");
  facultyLink.classList.remove("active-link");

  assignment.classList.add("hide");
  assignmentLink.classList.remove("active-link");

  feedback.classList.add("hide");
  feedbackLink.classList.remove("active-link");

  semester.classList.add("hide");
  semesterLink.classList.remove("active-link");

  subject.classList.add("hide");
  subjectLink.classList.remove("active-link");

  user.classList.remove("hide");
  userLink.classList.add("active-link");

  localStorage.setItem("contentState", "user");
});

// Check localStorage for content state on page load
window.addEventListener("DOMContentLoaded", function () {
  const contentState = localStorage.getItem("contentState");

  if (contentState === "dashboard") {
    dashboard.classList.remove("hide");
    dashboardLink.classList.add("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "teacher") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.remove("hide");
    teacherLink.classList.add("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "student") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.remove("hide");
    studentLink.classList.add("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "faculty") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.remove("hide");
    facultyLink.classList.add("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "assignment") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.remove("hide");
    assignmentLink.classList.add("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "feedback") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.remove("hide");
    feedbackLink.classList.add("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "semester") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.remove("hide");
    semesterLink.classList.add("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "subject") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.remove("hide");
    subjectLink.classList.add("active-link");

    user.classList.add("hide");
    userLink.classList.remove("active-link");
  } else if (contentState === "user") {
    dashboard.classList.add("hide");
    dashboardLink.classList.remove("active-link");

    teacher.classList.add("hide");
    teacherLink.classList.remove("active-link");

    student.classList.add("hide");
    studentLink.classList.remove("active-link");

    faculty.classList.add("hide");
    facultyLink.classList.remove("active-link");

    assignment.classList.add("hide");
    assignmentLink.classList.remove("active-link");

    feedback.classList.add("hide");
    feedbackLink.classList.remove("active-link");

    semester.classList.add("hide");
    semesterLink.classList.remove("active-link");

    subject.classList.add("hide");
    subjectLink.classList.remove("active-link");

    user.classList.remove("hide");
    userLink.classList.add("active-link");
  }
});
