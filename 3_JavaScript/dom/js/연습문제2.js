const targetDate = "2023-12-31 23:59:59";

function updateCountdown() {
    const now = new Date().getTime(); // 현재 시간의 타임스탬프 가져오기
    const target = new Date(targetDate).getTime(); // 종료 시간의 타임스탬프 가져오기

    // 남은 시간 계산 (밀리초 단위)
    const remainingTime = target - now;

    if (remainingTime <= 0) {
        // 종료 시간이 지남
        document.getElementById("countdown").innerHTML = "이벤트가 종료되었습니다.";
    } else {
        // 남은 시간 계산 (일, 시, 분, 초 단위)
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // 결과를 문자열로 변환하여 표시
        const countdownText = `남은 시간: ${days}일 ${hours}시 ${minutes}분 ${seconds}초`;
        document.getElementById("countdown").innerHTML = countdownText;
    }
}

// 1초마다 updateCountdown 함수 호출
setInterval(updateCountdown, 1000);

