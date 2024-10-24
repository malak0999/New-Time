let time = document.getElementById('taym')
let monthyear = document.getElementById('month')
const getDate = () =>{
    
    let date = new Date
    let years = date.getFullYear()
    let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    let day = date.getDate()
    
    let hour = date.getHours()
    let minut = date.getMinutes()< 10 ? '0' + date.getMinutes()  : date.getMinutes() 
    let secound = date.getSeconds()< 10 ? '0' + date.getSeconds() : date.getSeconds()
    time.textContent = `${hour}:${minut}:${secound}`
    monthyear.textContent = `${day} .${month} .${years}`
    
}

setInterval(()=>{
    getDate()
}, 1000)