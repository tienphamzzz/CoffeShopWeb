document.addEventListener('DOMContentLoaded', ()=> {
    const thanhcuon = document.getElementById('thanhcuon');
    const ND = document.getElementById('nd');
  
    document.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop||document.body.scrolltop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / (scrollHeight-clientHeight)) * 100;
      ND.style.width = scrollProgress + '%';
      console.log(scrollProgress);
    });
  });






document.addEventListener('DOMContentLoaded', ()=> {
    const thanhcuon = document.getElementById('thanhcuon');
    const ND = document.getElementsByClassName('.lienket');
  
    document.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop||document.body.scrolltop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / (scrollHeight-clientHeight)) * 100;
      ND.style.width = scrollProgress + '%';
    });
  });
    




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

