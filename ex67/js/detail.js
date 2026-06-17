let student =
    JSON.parse(localStorage.getItem("student"));

document.getElementById("detailTable").innerHTML = `
<tr>
    <th>Field</th>
    <th>Value</th>
</tr>

<tr>
    <td>Student ID</td>
    <td>${student.id}</td>
</tr>

<tr>
    <td>Student Name</td>
    <td>${student.name}</td>
</tr>

<tr>
    <td>Birthday</td>
    <td>${student.birthday}</td>
</tr>

<tr>
    <td>Gender</td>
    <td>${student.gender}</td>
</tr>
`;