let employeePayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
});
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    if(employeePayrollList.length == 0) return;  
    let innerHtml = `${headerHtml}`
  //  let employeePayrollList = createEmployeePayrollJSON();
    for (const employee of employeePayrollList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="${employee._picture}">
    </td>
    <td>${employee._name}</td>
    <td>${employee._gender}</td>
    <td>${getDeptHtml(employee._department)}</td>
    <td>${employee._salary}</td>
    <td>${employee._startDate}</td>
    <td>
        <img id="${employee._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="${employee._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

function remove(employeePayrollList) {
    localStorage.removeItem(employeePayrollList);
}
const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
};
// const createEmployeePayrollJSON = () => {
//     let employeeListLocal = [{
//             _name: "Priti",
//             _gender: "Female",
//             _department: ["Hr", "Engineering"],
//             _salary: "900000",
//             _startDate: "09 Mar 2020",
//             _note: "",
//             _id: new Date().getTime(),
//             _picture: "../assets/profileImages/Ellipse -1.png"
//         },
//         {
//             _name: "Nitin",
//             _gender: "Male",
//             _department: ["Finance", "Engineering"],
//             _salary: "550000",
//             _startDate: "27 Apr 2015",
//             _note: "",
//             _id: new Date().getTime() + 1,
//             _picture: "../assets/profileImages/Ellipse -3.png"
//         }
//     ];
//     return employeeListLocal;
// };