document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('sortableTable');
    const headers = Array.from(table.querySelectorAll('th[data-column]'));


    headers.forEach(header => {
        header.addEventListener('click', () => {
            const column = header.dataset.column; 
            const rows = Array.from(table.querySelectorAll('tbody tr'));
            
            rows.sort((a, b) => {
                const aValue = a.querySelector(`td:nth-child(${headers.indexOf(header) + 1})`).textContent;
                const bValue = b.querySelector(`td:nth-child(${headers.indexOf(header) + 1})`).textContent;

                if (column === 'age') {
                    return parseInt(aValue) - parseInt(bValue);
                } else {
                    return aValue.localeCompare(bValue);
                }
            });

            table.querySelector('tbody').innerHTML = '';
            rows.forEach(row => table.querySelector('tbody').appendChild(row));

            headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
            header.classList.add(header.classList.contains('sort-asc') ? 'sort-desc' : 'sort-asc');
        });
    });
});