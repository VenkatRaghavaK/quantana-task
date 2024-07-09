function modifyDate(dateStr, rule) {
    const date = new Date(dateStr);
    const unit = rule.endsWith('BD') ? 'BD' : rule.slice(-1);
    const amount = parseInt(rule.slice(0, -unit.length));

    if (unit === 'D') {
        return addDays(date, amount).toISOString().split('T')[0];
    } else if (unit === 'BD') {
        return addBusinessDays(date, amount).toISOString().split('T')[0];
    } else if (unit === 'W') {
        return addWeeks(date, amount).toISOString().split('T')[0];
    } else if (unit === 'M') {
        return addMonths(date, amount).toISOString().split('T')[0];
    } else if (unit === 'Y') {
        return addYears(date, amount).toISOString().split('T')[0];
    } else {
        throw new Error("Invalid rule provided. Use 'D', 'BD', 'W', 'M', or 'Y'.");
    }
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function addBusinessDays(date, businessDays) {
    let currentDate = new Date(date);
    while (businessDays > 0) {
        currentDate.setDate(currentDate.getDate() + 1);
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            businessDays--;
        }
    }
    return currentDate;
}

function addWeeks(date, weeks) {
    return addDays(date, weeks * 7);
}

function addMonths(date, months) {
    const result = new Date(date);
    const newMonth = result.getMonth() + months;
    result.setMonth(newMonth);


    if (result.getMonth() !== (newMonth % 12)) {
        result.setDate(0);
    }
    return result;
}

function addYears(date, years) {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);


    if (result.getMonth() === 1 && result.getDate() === 29 && !isLeapYear(result.getFullYear())) {
        result.setDate(28);
    }
    return result;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(modifyDate('2021-07-30', '2BD'));
console.log(modifyDate('2021-07-30', '2D'));
console.log(modifyDate('2021-07-30', '2W'));
console.log(modifyDate('2021-07-30', '2M'));
console.log(modifyDate('2021-01-30', '1M')); 