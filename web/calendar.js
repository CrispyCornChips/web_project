// 각 월의 일수
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 윤년 계산 함수 (필요 시 확장 가능)
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 선택된 달에 맞는 달력을 업데이트
function updateCalendar(month) {
    const year = 2024; // 고정된 연도 (변경 가능)
    const calendarTitle = document.getElementById("calendarTitle");
    const calendarBody = document.getElementById("calendarBody");

    // 윤년 적용 (2월)
    if (month === 1) {
        daysInMonth[1] = isLeapYear(year) ? 29 : 28;
    }

    // 제목 업데이트
    calendarTitle.textContent = `${year}.${month + 1}`;

    // 달력 내용 초기화
    calendarBody.innerHTML = "";

    // 해당 월의 첫째 날 요일 계산
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth[month];

    let row = document.createElement("tr");

    // 빈칸 채우기
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    // 날짜 채우기
    for (let date = 1; date <= totalDays; date++) {
        const cell = document.createElement("td");
        cell.textContent = date;

        // 일요일과 토요일 스타일 적용
        const dayIndex = (firstDay + date - 1) % 7;
        if (dayIndex === 0) {
            cell.classList.add("sunday");
        } else if (dayIndex === 6) {
            cell.classList.add("saturday");
        }

        row.appendChild(cell);

        // 토요일마다 새 행 추가
        if (dayIndex === 6) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // 마지막 행 추가
    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }
}

// 초기화 및 이벤트 리스너
document.addEventListener("DOMContentLoaded", () => {
    const monthSelect = document.getElementById("monthSelect");

    // 초기 달력 표시 (11월)
    updateCalendar(parseInt(monthSelect.value));

    // 선택한 달 변경 시 달력 업데이트
    monthSelect.addEventListener("change", (event) => {
        const selectedMonth = parseInt(event.target.value);
        updateCalendar(selectedMonth);
    });
});
