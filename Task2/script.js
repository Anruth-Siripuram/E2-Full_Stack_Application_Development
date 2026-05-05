function loadStudents() {
    const sort = document.getElementById("sort").value;
    const department = document.getElementById("department").value;

    fetch(`api/get_students.php?sort=${sort}&department=${department}`)
        .then(res => res.json())
        .then(data => {
            let table = document.getElementById("studentTable");
            table.innerHTML = "";

            data.forEach(s => {
                table.innerHTML += `
                    <tr>
                        <td>${s.name}</td>
                        <td>${s.department}</td>
                        <td>${s.join_date}</td>
                    </tr>
                `;
            });
        });

    fetch("api/get_department_count.php")
        .then(res => res.json())
        .then(data => {
            let list = document.getElementById("deptCount");
            list.innerHTML = "";

            data.forEach(d => {
                list.innerHTML += `<li>${d.department}: ${d.total}</li>`;
            });
        });
}

// Load on start
window.onload = loadStudents;
