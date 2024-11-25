const editButton = document.getElementById("editButton");
const saveButton = document.getElementById("saveButton");

const userPw = document.getElementById("userPw");
const userEmail = document.getElementById("userEmail");
const userName = document.getElementById("userName");

editButton.addEventListener("click", () => {
    // 수정 모드 활성화
    userPw.disabled = false;
    userEmail.disabled = false;
    userName.disabled = false;
    saveButton.disabled = false;
});

saveButton.addEventListener("click", () => {
    // 입력값 확인 (예: 비밀번호 최소 길이)
    if (userPw.value.length < 6) {
        alert("비밀번호는 최소 6자 이상이어야 합니다.");
        return;
    }

    // 수정 내용 저장 (현재는 콘솔 출력)
    console.log("저장된 정보:");
    console.log("PW:", userPw.value);
    console.log("E-Mail:", userEmail.value);
    console.log("Name:", userName.value);

    // 수정 모드 비활성화
    userPw.disabled = true;
    userEmail.disabled = true;
    userName.disabled = true;
    saveButton.disabled = true;

    alert("정보가 저장되었습니다!");
});
