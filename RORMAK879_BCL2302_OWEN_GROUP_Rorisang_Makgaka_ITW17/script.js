// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(null);
    }

    return result;
};

const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(7);
    let value = null;

    for (let weekIndex in weeks) {
        value = {
            week: parseInt(weekIndex) + 1,
            days: [],
        };

        for (let dayIndex in days) {
            const day = parseInt(dayIndex) + 1 - startDay;
            const isValid = day > 0 && day <= daysInMonth;

            value.days.push({
                dayOfWeek: parseInt(dayIndex) + 1,
                value: isValid ? day : '',
            });
        }

        weeks[weekIndex] = value;
    }

    return weeks;
};

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td class="${classString}">
            ${value}
        </td>
        ${existing}
    `;

    return result;
};

const createHtml = (data) => {
    let result = '';

    for (let week of data) {
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);

        for (let day of week.days) {
            let classString = 'table__cell';
            const isToday = new Date().getDate() === day.value && new Date().getMonth() === new Date().getMonth();
            const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
            const isAlternate = week.week % 2 === 0;

            if (isToday) classString += ' table__cell_today';
            if (isWeekend) classString += ' table__cell_weekend';
            if (isAlternate) classString += ' table__cell_alternate';

            inner = addCell(inner, classString, day.value);
        }

        result += `<tr>${inner}</tr>`;
    }

    return result;
};

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);

 