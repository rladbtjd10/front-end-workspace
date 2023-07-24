// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    // 어떤 동작을 시킬건지가 들어감 mouseenter: 마우스가 올라가면 색상변함
    h1.style.backgroundColor = "skyblue";
});

// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// img1.addEventListener('click', function() {
//     // img1.style.visibility = 'hidden'; /*방법1*/
//     img1.style.display = 'none';
// });
// img2.addEventListener('click', function() {
//     img2.style.visibility = 'hidden';
// });
// img3.addEventListener('click', function() {
//     img3.style.visibility = 'hidden';
// });
// img4.addEventListener('click', function() {
//     img4.style.visibility = 'hidden';
// });
// img5.addEventListener('click', function() {
//     img5.style.visibility = 'hidden';
// });

// const imgList = document.querySelectorAll('.container img');

// imgList[0].addEventListener('click', function() {
//     // img1.style.visibility = 'hidden'; /*방법1*/
//     imgList[0].style.display = 'none';
// });
// imgList[1].addEventListener('click', function() {
//     imgList[1].style.visibility = 'hidden';
// });
// imgList[2].addEventListener('click', function() {
//     imgList[2].style.visibility = 'hidden';
// });
// imgList[3].addEventListener('click', function() {
//     imgList[3].style.visibility = 'hidden';
// });
// imgList[4].addEventListener('click', function() {
//     imgList[4].style.visibility = 'hidden';
// });

const container = document.querySelector('.container');

function removeHandler(event) { //이벤트 객체가 숨겨져 있음
    console.log(event.currentTarget); // event.currentTarget = container랑 같음
    if(event.target!==event.currentTarget) {
    // if(event.target!==container){
        event.target.style.display = 'none';
    }
}

container.addEventListener('click',removeHandler);



