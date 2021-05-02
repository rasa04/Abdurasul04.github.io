//time
function time(){
    let t = new Date()
    let h = t.getHours()
    let m = t.getMinutes()
    document.getElementById('time').innerHTML = h+':'+m;
}
setInterval(time,1000)

//Change theme
function changeToNight(){
    document.body.style.background = 'url(sky.jpg)'
    document.getElementById('theme2').textContent = 'White'
    document.getElementById('theme2').style.backgroundColor = 'gold'
    document.getElementById('theme1').textContent = ''
    document.getElementById('theme1').style.backgroundColor = '#f1f1f1'
    /*Бекграунд секций*/
    document.getElementById('header').style.backgroundColor = '#333333'
    document.getElementById('header').style.color = '#ffffff'
    /**/
    document.getElementById('first').style.backgroundColor = '#333333'
    document.getElementById('first').style.color = '#ffffff'
    /**/
    document.getElementById('phone').style.backgroundColor = '#333333'
    document.getElementById('phone').style.color = '#ffffff'
    /**/
    document.getElementById('telegram').style.backgroundColor = '#333333'
    document.getElementById('telegram').style.color = '#ffffff'
    /**/
    document.getElementById('gmail').style.backgroundColor = '#333333'
    document.getElementById('gmail').style.color = '#ffffff'
    }
function changeToWhite(){
    document.body.style.background = 'url(sunset.jpg)'
    document.getElementById('theme1').textContent = 'Night'
    document.getElementById('theme1').style.backgroundColor = 'gold'
    document.getElementById('theme2').textContent = ''
    document.getElementById('theme2').style.backgroundColor = '#f1f1f1'
    /*Бекграунд секций*/
    document.getElementById('header').style.backgroundColor = 'cornsilk'
    document.getElementById('header').style.color = '#000000'
    /**/
    document.getElementById('first').style.backgroundColor = 'cornsilk'
    document.getElementById('first').style.color = '#000000'
    /**/
    document.getElementById('phone').style.backgroundColor = 'cornsilk'
    document.getElementById('phone').style.color = '#000000'
    /**/
    document.getElementById('telegram').style.backgroundColor = 'cornsilk'
    document.getElementById('telegram').style.color = '#000000'
    /**/
    document.getElementById('gmail').style.backgroundColor = 'cornsilk'
    document.getElementById('gmail').style.color = '#000000'
}

//Search
function search(){
    document.location = 'https://google.com'
}
