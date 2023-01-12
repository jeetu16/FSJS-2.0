let arr = ["ineuron","pw skills", "apple","amazon","pw skills", "google","microsoft","facebook","pw skills"];

let firstOccurrence = arr.lastIndexOf("pw skills",-(arr.length)+1);
let lastOccurrence = arr.lastIndexOf("pw skills");

console.log("Index starts of 0");
console.log("First Occurence of 'pw skills' in Array is: ", firstOccurrence);
console.log("Last Occurence of 'pw skills' in Array is: ", lastOccurrence);
