function time(){
    let t = new Date()
    let h = t.getHours()
    let m = t.getMinutes()
    document.getElementById('time').innerHTML = h+':'+m;
}
setInterval(time,1000)
