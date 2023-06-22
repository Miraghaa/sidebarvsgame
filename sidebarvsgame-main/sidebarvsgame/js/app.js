let btn = document.querySelector('#tel .bar')
let head = document.querySelector('#tel .headup')
let btn2 = document.querySelector('#tel .xx')
let head2 = document.querySelector('#tel .heads')



btn.onclick = () => {
    head.style.display = 'none'
    head2.style.display = 'block'    
}
btn2.onclick = () => {
    if(head.style.display == 'none'){
        head.style.display = 'flex'
        head2.style.display = 'none'    

    }else{
        head.style.display = 'none'
    }
 }


 let x = document.querySelector('.stick')
 let finis = document.querySelector('.finis')
 let game =  document.querySelector('.game')
let  y = 0;
let a = 0;
   

 document.body.onkeydown = (e) =>{
let c = document.getElementById('mar')
    if(e.key === 'ArrowUp'){
        y-=2;
       x.style.top = `${y}%`
    }else if(e.key === 'ArrowDown'){
        y+=2;
        x.style.top = `${y}%`
    }
    if(e.key === 'ArrowLeft'){
        a-=2;
       x.style.left = `${a}%`
    }else if(e.key === 'ArrowRight'){
        a+=2;
        x.style.left = `${a}%`
    }
    if(y===38 && a === 44){
         game.innerHTML = "Gollllllllllllllll"
    }else{
     setTimeout(() => {
        location.reload()
     }, 10000);
    }
   
 }