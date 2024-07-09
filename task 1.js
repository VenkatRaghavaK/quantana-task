function modify_date(dateString, rule) {
    let dateTime = new Date(dateString);

    switch (rule) {
        case 'NWE':
            let currentDayOfWeek = dateTime.getDay();
            if (currentDayOfWeek >= 5) {
                dateTime.setDate(dateTime.getDate() + (5 - currentDayOfWeek) + 7);
            } else {
                dateTime.setDate(dateTime.getDate() + (5 - currentDayOfWeek));
            }
            break;

        case 'NME':
            dateTime.setMonth(dateTime.getMonth() + 2);
            dateTime.setDate(0);
            break;
    }

    let year = dateTime.getFullYear();
    let month = String(dateTime.getMonth() + 1).padStart(2, '0');
    let day = String(dateTime.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
console.log(modify_date('2024-07-01', 'NWE'));
console.log(modify_date('2021-08-01', 'NWE'));
console.log(modify_date('2021-02-20', 'NME')); 