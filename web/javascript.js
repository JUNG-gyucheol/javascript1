var 이미지좌표 = '0';
var 가위바위보 = {
    바위 : '0',
    가위 : '-150px',
    보 : '-300px'
}
function 컴퓨터의선택(이미지좌표){
    return Object.entries(가위바위보).find(function (v) {
        return v[1] == 이미지좌표;
    })[0];
}

var 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(function(){
        if (이미지좌표 == 가위바위보.바위) {
            이미지좌표 = 가위바위보.가위;
        } else if (이미지좌표 == 가위바위보.가위) {
            이미지좌표 = 가위바위보.보;
        } else {
            이미지좌표 = 가위바위보.바위;
        }
        document.querySelector('#computer').style.background =
            'url(/image/824700804.jpg)' + 이미지좌표 + ' 0';
    }, 100);
}
var 점수표 = {
    가위 : 1,
    바위 : 0,
    보 : -1
}
인터벌메이커();
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(인터벌);
        setTimeout(function () {
            인터벌메이커();
        }, 1000);
        //변수를 사용해서 중복되는 것을 제거
        var 나의선택 = this.textContent;
        var 나의점수 = 점수표[나의선택];
        var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)]
        var 점수차 = 나의점수 - 컴퓨터점수;
        if(점수차 == 0){
            console.log('비겼습니다.');
        } else if ([-1,2].includes(점수차)){
            //또는 관계일때 배열로 이용하여 포함되어 있으면 true가 나옴
            console.log('이겼습니다.');
        } else {
            console.log('졌습니다.');
        }
    });
});


