const festivals = {
    1: ["새해맞이 축제"],
    2: ["발렌타인 데이 축제"],
    3: ["봄꽃 축제"],
    4: ["벚꽃 축제"],
    5: ["어린이날 축제"],
    6: ["여름 음악 축제"],
    7: ["해변 축제"],
    8: ["여름 영화제"],
    9: ["가을 수확 축제"],
    10: ["할로윈 축제"],
    11: ["겨울 축제"],
    12: ["크리스마스 축제"],
};

function createCalendar() {
    const calendarElement = document.getElementById('calendar');
    for (let month = 1; month <= 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerHTML = `<h2>${month}월</h2>`;

        const festivalList = festivals[month] || [];
        festivalList.forEach(festival => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerText = festival;
            monthDiv.appendChild(dayDiv);
        });

        calendarElement.appendChild(monthDiv);
    }
}

createCalendar();
