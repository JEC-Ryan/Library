function score(){
    score=0;
    if (ans1.value=="阿基里斯") {score+=10}
    if (ans2.value=="藍色") {score+=10}
    if (ans3.value=="瑪土撒拉") {score+=10}
    if (ans4.value=="白努力定律") {score+=10}
    if (ans5.value=="c" || ans5.value=="C") {score+=10}
    if (ans6.value=="光線") {score+=10}
    if (ans7.value=="瞳孔") {score+=10}
    if (ans8.value=="加拿大") {score+=10}
    if (ans9.value=="j" || ans9.value=="J") {score+=10}
    if (ans10.value=="冰島") {score+=10}
    document.getElementById('score').innerHTML = score+"分" ;

    if (score===100) {document.getElementById('pw').innerHTML = "pw: 5429" ;}
    //if (diceNum===0) {
    //    gamble=1;
    //    game = false;
        //document.getElementById('roundNum').innerHTML = "第" + round + "輪";
        //document.getElementById('moneyNum').innerHTML = "目前的金錢：" + money ;
    //    document.getElementById('gambleNum').innerHTML = "你賭輸了！賭金：0" ;
    //    if (money===0) {
    //        document.getElementById('result').innerHTML = "你輸光光了！" ;
    //        lose=true;
    //    } else {
    //    document.getElementById('keepGamble').innerHTML = "下注！" ;
    //    round++;    
    //    }
    //} else {
    //    gamble=gamble*2;
        //document.getElementById('roundNum').innerHTML = "第" + round + "輪";
        //document.getElementById('moneyNum').innerHTML = "目前的金錢：" + money ;
    //    document.getElementById('gambleNum').innerHTML = "你賭贏了，賭金翻倍：" + gamble ;
    //}

}