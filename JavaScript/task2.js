// Bonous finding javaScipt program
document.write("<em>Find bonous with Salary</em><br>");
let salary=Number(prompt("Enter Salary :"));
let total_day=Number(prompt("Enter Total working day"));
// working day-wd
let wd=Number(prompt("Enter Working day:"));
let bonous=Number(prompt("Enter Bonous:"));
let one_ds=salary/total_day;
// ws=working day salary
let ws=one_ds*wd;
let total_salary=ws+bonous;
document.write("One Day salary"+one_ds+"<br>");
document.write("working day salary:"+ws);
document.write("Total salary:"+total_salary);

document.write("<hr>");
// Detection javascript progeam
document.write("<em>Detection</em><br>");
const s=Number(prompt("Enter Salary:"));
const t_d=Number(prompt("Enter Total working day"));
// working day-wd
let work_d=Number(prompt("Enter Working day:"));
let o_d=s/t_d;
let t_p=o_d*work_d;
let de=t_p-500;
document.write("Total Salary"+t_p+"<br>")
document.write("Detection"+de);
document.write("<hr>")
// watch gst find amount

let w_p=Number(prompt("Enter watch Price:"));;
let w_n=Number(prompt("Enter Total watch  no:"));
let w_total=w_p*w_n;
let gst=w_total*18/100;
let amt=w_total+gst;
document.write("Total price"+w_total+"<br>");
document.write("final price"+amt)




