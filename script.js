const companyRows = document.getElementById("company-rows");
const form = document.getElementById("add-company-form");

let companies = JSON.parse(localStorage.getItem("companies")) || [];

function updateTable() {
    companyRows.innerHTML = "";
    companies.forEach((company, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${company.cod}</td>
            <td>${company.empresa}</td>
            <td>${company.nif}</td>
            <td>${company.localizacao}</td>
            <td>${company.total}</td>
            <td>${company.mes}</td>
            <td>${company.selo}</td>
            <td>${company.irt}</td>
            <td>${company.rf}</td>
            <td>${company.ip}</td>
            <td>${company.iva}</td>
        `;
        companyRows.appendChild(row);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const company = {
        cod: document.getElementById("cod").value,
        empresa: document.getElementById("empresa").value,
        nif: document.getElementById("nif").value,
        localizacao: document.getElementById("localizacao-empresa").value,
        total: document.getElementById("total").value,
        mes: new Date().toLocaleString("default", { month: "long" }),
        selo: document.getElementById("selo").value,
        irt: document.getElementById("irt").value,
        rf: document.getElementById("rf").value,
        ip: document.getElementById("ip").value,
        iva: document.getElementById("iva").value,
    };

    companies.push(company);
    localStorage.setItem("companies", JSON.stringify(companies));
    updateTable();
    form.reset();
});

document.getElementById("delete-company").addEventListener("click", () => {
    if (confirm("Deseja apagar todos os cadastros?")) {
        companies = [];
        localStorage.setItem("companies", JSON.stringify(companies));
        updateTable();
    }
});

updateTable();
