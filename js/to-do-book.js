let count = 0;
document.getElementById('add-item-btn').addEventListener('click', function () {
    const BookNameInput = document.getElementById('book-name');
    const BookName = BookNameInput.value;
    BookNameInput.value = "";

    const autorNameInput = document.getElementById('autor-name');
    const autorName = autorNameInput.value;
    autorNameInput.value = "";

    const yearInput = document.getElementById('year');
    const year = yearInput.value;
    yearInput.value = "";

    if (isNaN(year)) {
        alert('Please enter a year');
        return;
    }
    if (BookName == "" || autorName == "" || year == ""){
    alert('please fill up the form')
    }
    else {
        count++;
        const tableBody = document.getElementById('table-body');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th class="text-muted" scope="row">${count}</th>
            <th class="text-muted">${BookName}</th>
            <td class="text-muted">${autorName}</td>
            <td class="text-muted">${year}</td>
        `;
        tableBody.appendChild(tr);
    }
})