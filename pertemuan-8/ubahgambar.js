var myImg = document.querySelector('img');

myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');

    if(mySrc == 'bunga.png'){
        myImg.setAttribute('src', 'bunga2.png');
    } else{
        myImg.setAttribute('src','bunga.png');
    }
}