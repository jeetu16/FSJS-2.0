let courseName = "Full Stack Java";

let findString = courseName.includes("Script");

// includes() method returns false because courseName variable doesn't contain "Script"

if(findString) {
    console.log("Course Name contains the string Script");
}
else{
    console.log("Doesn't contain string Script");
}