/*
    WD1-L4 Finals Activity
    Student Grade Evaluation System
    This program uses arrays and a for loop to evaluate
    the grades of all enrolled students.
*/

// Array containing the names of the students
const studentNames = [
    "Anna Reyes",
    "Ben Santos",
    "Carla Cruz",
    "David Lim",
    "Ella Ramos"
];

// Array containing the grades of the students
const studentGrades = [92, 85, 78, 97, 74];

// this function determines the student's remark
function getRemark(grade) {
    let remark = grade >= 75 ? "Passed" : "Failed";

    return remark;
}

// Function to convert numerical grades into equivalents
function getEquivalent(grade) {
    let equivalent = "";

    if (grade >= 97) {
        equivalent = "1.0";
    } else if (grade >= 94) {
        equivalent = "1.25";
    } else if (grade >= 91) {
        equivalent = "1.50";
    } else if (grade >= 88) {
        equivalent = "1.75";
    } else if (grade >= 85) {
        equivalent = "2.0";
    } else if (grade >= 82) {
        equivalent = "2.25";
    } else if (grade >= 79) {
        equivalent = "2.50";
    } else if (grade >= 76) {
        equivalent = "2.75";
    } else if (grade >= 75) {
        equivalent = "3.0";
    } else {
        equivalent = "5.0";
    }

    return equivalent;
}

// functions to determine the academic leader classification
function getAcademicLeader(equivalent) {
    let leader = "";

    switch (equivalent) {
        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;

        case "1.50":
            leader = "2nd Class Academic Leader";
            break;

        case "1.75":
            leader = "3rd Class Academic Leader";
            break;

        default:
            leader = "-";
    }

    return leader;
}

// function to display the grade equivalents
function showGradeEquivalent() {

    // Create the heading and table
    let output = "<h2>Grade Equivalents</h2>";
    output += "<table>";

    // Create the table header
    output += "<thead><tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr></thead>";

    output += "<tbody>";

    // loop through all students using the array index
    for (let i = 0; i < studentNames.length; i++) {

        // Get the current student's grade
        let grade = studentGrades[i];

        // Call the evaluation functions
        let equivalent = getEquivalent(grade);
        let remark = getRemark(grade);
        let leader = getAcademicLeader(equivalent);

        // Add the student's information to the table
        output += "<tr>";
        output += "<td>" + studentNames[i] + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>";
    }

    // Close the table
    output += "</tbody></table>";

    // Display the completed table in the HTML page
    document.getElementById("result").innerHTML = output;
}
