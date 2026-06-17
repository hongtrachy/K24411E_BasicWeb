let xmlString = `
<students>
    <student>
        <id>987456</id>
        <name>Marie Curie</name>
        <birthday>7/11/1867</birthday>
        <gender>Woman</gender>
    </student>

    <student>
        <id>987561</id>
        <name>Einstein</name>
        <birthday>14/3/1879</birthday>
        <gender>Man</gender>
    </student>

    <student>
        <id>985467</id>
        <name>Leó Szilárd</name>
        <birthday>11/2/1898</birthday>
        <gender>Man</gender>
    </student>
</students>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const studentNodes = xmlDoc.getElementsByTagName("student");

let students = [];

for(let i = 0; i < studentNodes.length; i++){

    students.push({
        id: studentNodes[i]
            .getElementsByTagName("id")[0]
            .textContent.trim(),

        name: studentNodes[i]
            .getElementsByTagName("name")[0]
            .textContent.trim(),

        birthday: studentNodes[i]
            .getElementsByTagName("birthday")[0]
            .textContent.trim(),

        gender: studentNodes[i]
            .getElementsByTagName("gender")[0]
            .textContent.trim()
    });
}

function loadStudents(){

    let tbody =
        document.querySelector("#studentTable tbody");

    tbody.innerHTML = "";

    students.forEach(student => {

        let row = tbody.insertRow();

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.birthday}</td>
            <td>${student.gender}</td>
        `;

        // Mouse over -> yellow
        row.onmouseover = function(){
            this.style.backgroundColor = "yellow";
        };

        // Mouse out -> white
        row.onmouseout = function(){
            this.style.backgroundColor = "white";
        };

        // Click row -> detail page
        row.onclick = function(){

            localStorage.setItem(
                "student",
                JSON.stringify(student)
            );

            window.location.href = "detail.html";
        };
    });
}

let ascending = true;

function sortByColumn(col){

    let field = [
        "id",
        "name",
        "birthday",
        "gender"
    ][col];

    students.sort((a,b)=>{

        if(ascending){
            return a[field]
                .localeCompare(b[field]);
        }

        return b[field]
            .localeCompare(a[field]);
    });

    ascending = !ascending;

    loadStudents();
}

loadStudents();