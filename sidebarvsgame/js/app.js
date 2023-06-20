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