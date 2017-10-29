var col1 = ["http://i.imgur.com/TmJKMf1.png", "http://i.imgur.com/4styCC3.png", "http://i.imgur.com/ufATBsF.png", "http://i.imgur.com/P1rKUnO.png", "http://i.imgur.com/Cq2R0on.png", "http://i.imgur.com/jq28rVf.png", "http://i.imgur.com/72VL3dg.png", "http://i.imgur.com/cHvHVYX.png", "http://i.imgur.com/7oPzeMH.png"];
var cols1 = ["red", "yellow", "blue", "brown", "grey", "green", "orange", "pink", "purple"];
var adj1 = ["http://i.imgur.com/rVdBHVo.png", "http://i.imgur.com/FYcynWl.png", "http://i.imgur.com/wTCFBUy.png", "http://i.imgur.com/5BRgmY4.png", "http://i.imgur.com/sOyMwXt.png", "http://i.imgur.com/lJAxrhM.png", "http://i.imgur.com/oewrWpv.png", "http://i.imgur.com/oI0rX4M.png", "http://i.imgur.com/JPPmrms.png"];
var adjs1 = ["fancy", "smelly", "old", "beautiful", "creepy", "embarassed", "sad", "silly", "jolly"];
var noun1 = ["http://i.imgur.com/j8vIAxx.png", "http://i.imgur.com/9AnWhhz.png", "http://i.imgur.com/2ulRszC.png", "http://i.imgur.com/CjEmWDp.png", "http://i.imgur.com/T852l0g.png", "http://i.imgur.com/CcJF5Zx.png", "http://i.imgur.com/ikYBK1T.png", "http://i.imgur.com/DmQjTsr.png", "http://i.imgur.com/yFi7vLL.png"];            
var nouns1 = ["cat", "dog", "fish", "bear", "bunny", "cow", "ghost", "mouse", "pie"];
var verb = ["http://i.imgur.com/qgM2Gsm.png",  "http://i.imgur.com/YnTuLIk.png", "http://i.imgur.com/E9lDF72.png", "http://i.imgur.com/nZ64YZa.png", "http://i.imgur.com/4deiquT.png", "http://i.imgur.com/mPTsLhV.png", "http://i.imgur.com/GlgAG6S.png", "http://i.imgur.com/BLbgmpN.png", "http://i.imgur.com/jPzrgJm.png"];    
var verbs = ["eats", "hits", "cleans", "calls", "loves", "paints", "smites", "sprays", "stabs"];            
var noun2 = ["http://i.imgur.com/WQXOBYy.png", "http://i.imgur.com/umq9eLP.png", "http://i.imgur.com/LUyimXe.png", "http://i.imgur.com/iQq20oY.png", "http://i.imgur.com/AUCJfwA.png", "http://i.imgur.com/339pTlO.png", "http://i.imgur.com/lJHMiql.png"];
var nouns2 = ["melon", "rock", "whale", "burger", "carrot", "puddle", "rug"]
var adj2 = ["http://i.imgur.com/694FOdR.png",  "http://i.imgur.com/1SvSufU.png",  "http://i.imgur.com/Nh2DUcD.png", "http://i.imgur.com/MAZmZU0.png", "http://i.imgur.com/0WURp3P.png", "http://i.imgur.com/h5xI4uP.png", "http://i.imgur.com/QRLiG9q.png", "http://i.imgur.com/dnuJWxT.png", "http://i.imgur.com/nLY1Rmw.png"];
var adjs2 = ["bearded", "disguised", "sleepy", "cool", "fabulous", "hungry", "jolly", "laughing", "sick"];
            
function createSentence() {            
    var i
    
    i = Math.floor(Math.random() * 9)
    document.getElementById("col1_word").innerHTML = cols1[i]
    document.getElementById("col1").src = col1[i]
                
    i = Math.floor(Math.random() * 9)
    document.getElementById("adj1_word").innerHTML = adjs1[i] 
    document.getElementById("adj1").src = adj1[i]
                
    i = Math.floor(Math.random() * 9)
    document.getElementById("noun1_word").innerHTML = nouns1[i]
    document.getElementById("rsg").innerHTML = "RSG+d: " + nouns1[i]
    document.getElementById("noun1").src = noun1[i]
                
    i = Math.floor(Math.random() * 9)
    document.getElementById("verb_word").innerHTML = verbs[i]
    document.getElementById("verb").src = verb[i]
                
    i = Math.floor(Math.random() * 9)
    document.getElementById("adj2_word").innerHTML = adjs2[i]
    document.getElementById("adj2").src = adj2[i]
                
    i = Math.floor(Math.random() * 7)
    document.getElementById("noun2_word").innerHTML = nouns2[i] + "."
    document.getElementById("noun2").src = noun2[i]
}
createSentence()
            
function col1_reset() {
    var i = Math.floor(Math.random() * 9)
    document.getElementById("col1_word").innerHTML = cols1[i]
    document.getElementById("col1").src = col1[i]
}
function adj1_reset() {
    var i = Math.floor(Math.random() * 9)
    document.getElementById("adj1_word").innerHTML = adjs1[i] 
    document.getElementById("adj1").src = adj1[i]
}
function noun1_reset() {
    var i = Math.floor(Math.random() * 9)
    document.getElementById("noun1_word").innerHTML = nouns1[i]
    document.getElementById("rsg").innerHTML = "RSG+d: " + nouns1[i]
    document.getElementById("noun1").src = noun1[i]
}
function verb_reset() {
    var i = Math.floor(Math.random() * 9)
    document.getElementById("verb_word").innerHTML = verbs[i]
    document.getElementById("verb").src = verb[i]
}
function adj2_reset() {
    var i = Math.floor(Math.random() * 9)
    document.getElementById("adj2_word").innerHTML = adjs2[i]
    document.getElementById("adj2").src = adj2[i]
}
function noun2_reset() {
    var i = Math.floor(Math.random() * 7)
    document.getElementById("noun2_word").innerHTML = nouns2[i] + "."
    document.getElementById("noun2").src = noun2[i]
}