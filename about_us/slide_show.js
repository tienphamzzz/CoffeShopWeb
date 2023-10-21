

// const anh=document.querySelector('.img');
// const imgs=document.getElementsByClassName('.vinh')
// const length=imgs.length
// let x=0;
// function chuyen(){
//     x-=100;
//     if(x<-200){
//         x=0; anh.style.transition = 'none';
//         let width=imgs[0].offsetwidth
//         anh.style.transform=`translateX(${0}%)`;
//     }
//     else {
//         anh.style.transition = 'transform 0.5s ease'; // Bật lại transition khi chuyển ảnh
//         let width=imgs[0].offsetwidth
//         anh.style.transform=`translateX(${x*-1*width}%)`;
//       }
//     // anh.style.transform=`translateX(${x}%)`;
// }
// setInterval(chuyen,2000);

const anh=document.querySelector('.img');
const imgs=document.querySelectorAll('.vinh')
const length=imgs.length
let x=0
setInterval(()=>{
    if(x==length-1){
        x=0
        let width = imgs[0].offsetWidth
        anh.style.transform=`translateX(${0}px)`;
    }
    else{
        x++
        let width=imgs[0].offsetWidth
        anh.style.transform=`translateX(${x*-1*width}px)`;


    }
}
    ,2000)


// const anh2=document.querySelector('.anh');


// let y=0;
// function chuyen2(){
//     y-=100;
//     if(y<-200){
//         y=0; anh2.style.transition = 'none';
        
//         anh2.style.transform=`translateX(${y}%)`;
//     }
//     else {
//         anh2.style.transition = 'transform 0.5s ease'; // Bật lại transition khi chuyển ảnh
        
//         anh2.style.transform=`translateX(${y}%)`;
//       }
//     // anh.style.transform=`translateX(${x}%)`;
// }
// setInterval(chuyen2,2000);
  
  