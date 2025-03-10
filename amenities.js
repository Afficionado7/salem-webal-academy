//template 1
const learn1 = document.querySelector('.learn1') ;
const show1 = document.querySelector('.learn1 p') ;
 learn1.addEventListener('mouseover', () => {
    show1.classList.toggle('active');
    show1.innerHTML = "Lorem ipsum dolor"
 })
 learn1.addEventListener('mouseout', () => {
    show1.classList.remove('active');
    show1.innerHTML = "MODERN CLASSROOMS"
 })
// template 2
 const learn2 = document.querySelector('.learn2') ;
const show2 = document.querySelector('.learn2 p') ;
 learn2.addEventListener('mouseover', () => {
    show2.classList.toggle('active');
    show2.innerHTML = "Lorem ipsum dolor"
 })
 learn2.addEventListener('mouseout', () => {
    show2.classList.remove('active');
    show2.innerHTML = "DIVERSIFIED LIBRARIES"
 })
//template 3
 const learn3 = document.querySelector('.learn3') ;
const show3 = document.querySelector('.learn3 p') ;
 learn3.addEventListener('mouseover', () => {
    show3.classList.toggle('active');
    show3.innerHTML = "Lorem ipsum dolor"
 })
 learn3.addEventListener('mouseout', () => {
    show3.classList.remove('active');
    show3.innerHTML = "EQUIPPED LABORATORIES"
 })
//template 4
 const learn4 = document.querySelector('.learn4') ;
const show4 = document.querySelector('.learn4 p') ;
 learn4.addEventListener('mouseover', () => {
    show4.classList.toggle('active');
    show4.innerHTML = "Lorem ipsum dolor"
 })
 learn4.addEventListener('mouseout', () => {
    show4.classList.remove('active');
    show4.innerHTML = "ACCESSIBLE COMPUTER LAB"
 })

 const bus1 = document.querySelector('.bus1') ;
 const bus2 = document.querySelector('.bus2') ;

setInterval(() => {
   bus1.classList.toggle('active');
    bus2.classList.toggle('active');
}, 3000);