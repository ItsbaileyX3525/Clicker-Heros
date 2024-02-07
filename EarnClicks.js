//Make sure to make the offline earn from 5 to 500

try{if(!score){;}}catch{score = parseFloat(save_system_load("score"))}
try{if(!overallScoreEarned){;}}catch{overallScoreEarned=parseFloat(save_system_load('overallscoreearned'))}
try{if(!joinDate){;}}catch{round(joinDate=int(save_system_load('joindate')))}

Gen1Owned = int(save_system_load("gen1owned"));
Gen2Owned = int(save_system_load("gen2owned"));
Gen3Owned = int(save_system_load("gen3owned"));
Gen4Owned = int(save_system_load("gen4owned"));
Gen5Owned = int(save_system_load("gen5owned"));
Gen6Owned = int(save_system_load("gen6owned"));
Gen7Owned = int(save_system_load("gen7owned"));
Gen8Owned = int(save_system_load("gen8owned"));
Gen9Owned = int(save_system_load("gen9owned"));
Gen10Owned = int(save_system_load("gen10owned"));
Gen11Owned = int(save_system_load("gen11owned"));
Gen12Owned = int(save_system_load("gen12owned"));
Gen13Owned = int(save_system_load("gen13owned"));
Gen14Owned = int(save_system_load("gen14owned"));
const variablesToCheck = ['Gen1Owned', 'Gen2Owned', 
'Gen3Owned', 'Gen4Owned', 'Gen5Owned', 'Gen6Owned',
'Gen7Owned','Gen8Owned','Gen9Owned','Gen10Owned',
'Gen11Owned','Gen12Owned','Gen13Owned','Gen14Owned'];
for (const variable of variablesToCheck) {
    if (!window[variable] || window[variable] === null) {
        window[variable] = 0;
    }
}
globalMultiplier = parseFloat(save_system_load('globalmultiplier'))
gen1Multiplier = parseFloat(save_system_load('gen1multiplier'))
gen2Multiplier = parseFloat(save_system_load('gen2multiplier'))
gen3Multiplier = parseFloat(save_system_load('gen3multiplier'))
gen4Multiplier = parseFloat(save_system_load('gen4multiplier'))
gen5Multiplier = parseFloat(save_system_load('gen5multiplier'))
gen6Multiplier = parseFloat(save_system_load('gen6multiplier'))
gen7Multiplier = parseFloat(save_system_load('gen7multiplier'))
gen8Multiplier = parseFloat(save_system_load('gen8multiplier'))
gen9Multiplier = parseFloat(save_system_load('gen9multiplier'))
gen10Multiplier = parseFloat(save_system_load('gen10multiplier'))
gen11Multiplier = parseFloat(save_system_load('gen11multiplier'))
gen12Multiplier = parseFloat(save_system_load('gen12multiplier'))
gen13Multiplier = parseFloat(save_system_load('gen13multiplier'))
gen14Multiplier = parseFloat(save_system_load('gen14multiplier'))
const vars2 = ['globalMultiplier', 'gen1Multiplier'
, 'gen2Multiplier', 'gen3Multiplier', 'gen4Multiplier'
, 'gen5Multiplier', 'gen6Multiplier', 'gen7Multiplier'
, 'gen8Multiplier', 'gen9Multiplier', 'gen10Multiplier'
, 'gen11Multiplier', 'gen12Multiplier', 'gen13Multiplier'
, 'gen14Multiplier']
for (const variable of vars2) {
    if (!window[variable] || window[variable] === null) {
        window[variable] = 1;
    }
}
let Gen1Earn = 0.1
let Gen2Earn = 1
let Gen3Earn = 8
let Gen4Earn = 47
let Gen5Earn = 260
let Gen6Earn = 1400
let Gen7Earn = 7800
let Gen8Earn = 44000
let Gen9Earn = 260000
let Gen10Earn = 1600000
let Gen11Earn = 10000000
let Gen12Earn = 65000000
let Gen13Earn = 430000000
let Gen14Earn = 2900000000
function applyScore() {
    try {
    if (Gen1Owned > 0){
    score = Math.round((score + Gen1Earn * Gen1Owned * gen1Multiplier * globalMultiplier) * 10) / 10;
    overallScoreEarned = Math.round((overallScoreEarned + Gen1Earn * Gen1Owned * gen1Multiplier * globalMultiplier) * 10) / 10;}
    if (Gen2Owned > 0){
        score += Gen2Earn * Gen2Owned * gen2Multiplier * globalMultiplier;
        overallScoreEarned += Gen2Earn * Gen2Owned * gen2Multiplier * globalMultiplier;}
    if (Gen3Owned > 0 * gen2Multiplier * globalMultiplier){
        score += Gen3Earn * Gen3Owned * gen3Multiplier * globalMultiplier;
        overallScoreEarned += Gen3Earn * Gen3Owned * gen3Multiplier * globalMultiplier;}
    if (Gen4Owned > 0){
      score += Gen4Earn * Gen4Owned * gen4Multiplier * globalMultiplier;
      overallScoreEarned += Gen4Earn * Gen4Owned * gen4Multiplier * globalMultiplier;}
    if (Gen5Owned > 0){
        score += Gen5Earn * Gen5Owned * gen6Multiplier * globalMultiplier;
        overallScoreEarned += Gen5Earn * Gen5Owned * gen6Multiplier * globalMultiplier;}
    if (Gen6Owned > 0){
        score += Gen6Earn * Gen6Owned * gen6Multiplier * globalMultiplier;
        overallScoreEarned += Gen6Earn * Gen6Owned * gen6Multiplier * globalMultiplier;}
    if (Gen7Owned > 0){
        score += Gen7Earn * Gen7Owned * gen7Multiplier * globalMultiplier;
        overallScoreEarned += Gen7Earn * Gen7Owned * gen7Multiplier * globalMultiplier;}
    if (Gen8Owned > 0){
        score += Gen8Earn * Gen8Owned * gen8Multiplier * globalMultiplier;
        overallScoreEarned += Gen8Earn * Gen8Owned * gen8Multiplier * globalMultiplier;}
    if (Gen9Owned > 0){
        score += Gen9Earn * Gen9Owned * gen9Multiplier * globalMultiplier;
        overallScoreEarned += Gen9Earn * Gen9Owned * gen9Multiplier * globalMultiplier;}
    if (Gen10Owned > 0){
        score += Gen10Earn * Gen10Owned * gen10Multiplier * globalMultiplier;
        overallScoreEarned += Gen10Earn * Gen10Owned * gen10Multiplier * globalMultiplier;}
    if (Gen11Owned > 0){
        score += Gen11Earn * Gen11Owned * gen11Multiplier * globalMultiplier;
        overallScoreEarned += Gen11Earn * Gen11Owned * gen11Multiplier * globalMultiplier;}
    if (Gen12Owned > 0){
        score += Gen12Earn * Gen12Owned * gen12Multiplier * globalMultiplier;
        overallScoreEarned += Gen12Earn * Gen12Owned * gen12Multiplier * globalMultiplier;}
    if (Gen13Owned > 0){
        score += Gen13Earn * Gen13Owned * gen13Multiplier * globalMultiplier;
        overallScoreEarned += Gen13Earn * Gen13Owned * gen13Multiplier * globalMultiplier;}
    if (Gen14Owned > 0){
        score += Gen14Earn * Gen14Owned * gen14Multiplier * globalMultiplier;
        overallScoreEarned += Gen14Earn * Gen14Owned * gen14Multiplier * globalMultiplier;}

        save_system_save("score", score);
        save_system_save("overallscoreearned", overallScoreEarned);
        after(1, function() {
        applyScore();
    })} catch (err) {
        
        console.log("error" , err);
        AndroidApp.closeApp();
    }
   
}

applyScore();


//Used to credit player score if offline up to 3 days
//Why? Because im kind :) also you get 1/4 of the real amount. (I'm evil apparently)
const currentPath = window.location.pathname;
const parts = currentPath.split('/');
const afterSlash = parts[parts.length - 1];
function _formatNumber(number) {
  const suffixes = ['', 'K', 'M', 'B', 'T', 'E', 'P', 'V', 'Dd', 'Qd', 'Sd', 'Td', 'Ud', 'Vd', 'Wd', 'Xd', 'Yd', 'Zd'];
  
  let magnitude = 0;
  while (number >= 1000 && magnitude < suffixes.length - 1) {
      number /= 1000;
      magnitude++;
  }
  
  const formattedNumber = number % 1 === 0 ? number.toFixed(0) : number.toFixed(2);
  return formattedNumber + suffixes[magnitude];
}
function getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000);
  }
  
  function updateElapsedTime() {
    const currentTime = getCurrentTimestamp();
    timeCounter = currentTime - joinDate
    localStorage.setItem('lastVisitTime', currentTime.toString());
}

function findLastTime() {
    const startTime = getCurrentTimestamp();
    const lastVisitTime = parseInt(localStorage.getItem('lastVisitTime'));
    if (startTime - lastVisitTime > 500) {
        if (startTime - lastVisitTime >= 259200) {
            const elapsedTime = 259200
            offlineEarn(elapsedTime)
        } else {
        const elapsedTime = startTime - lastVisitTime;
        offlineEarn(elapsedTime);
        }
    }
}

function doubleDaMoneyFunc() {
    score += TotalEarned / 2
    
    for (var e of zeItems) {
        e.enabled = false
    }
}

function displayOfflineEarnings() {
    const amount = TotalEarned / 4;
    
    lastplayedscreen = new Entity({name:'lastplayedscreen ', parent:camera.ui,texture:'https://i.ibb.co/JRNVZHz/earned-Gradient.webp',scale:[1.2,1],z:-2})
    earnedSinceLastPlayed = new Text({name:'earnedSinceLastPlayed ', xy:[.1,-.0],text_size:5,text:`Earned since last online:`,z:-2})
    totalAmountEarned = new Text({name:'totalAmountEarned ', text:`${_formatNumber(amount/4)}`,z:-2,text_size:8,xy:[.28,-.4],text_color:color.white})
    confirmDaMoney = new Button({name:'confirmDaMoney ', text:'OK',z:-2,scale:[.15,.1],y:-.4,x:.3})
    doubleDaMoney = new Button({name:'doubleDaMoney ', text:'X2 money',z:-2,scale:[.16,.1],color:color.green,xy:[-.3,-.4]})
    confirmDaMoney.on_click = function() {
        score += amount / 4
        for (var e of zeItems) {
            e.enabled = false
        }
    }
    doubleDaMoney.on_click = function(){
        //doubleDaMoneyFunc()
        AndroidApp.loadReward(2)
    }

    zeItems.push(lastplayedscreen)
    zeItems.push(earnedSinceLastPlayed)
    zeItems.push(totalAmountEarned)
    zeItems.push(confirmDaMoney)
    zeItems.push(doubleDaMoney)
}

function offlineEarn(time) {
    try {
        if (Gen1Owned > 0){
            TotalEarned = Math.round((TotalEarned + 0.1 * Gen1Owned * time) * 10) / 10 ;
        }
        if (Gen2Owned > 0){
            TotalEarned += Gen2Earn * Gen2Owned * time;}
        if (Gen3Owned > 0){
            TotalEarned += Gen3Earn * Gen3Owned * time;}
        if (Gen4Owned > 0){
            TotalEarned += Gen4Earn * Gen4Owned * time;}
        if (Gen5Owned > 0){
            TotalEarned += Gen5Earn * Gen5Owned * time;}
        if (Gen6Owned > 0){
            TotalEarned += Gen6Earn * Gen6Owned * time;}
        if (Gen7Owned > 0){
            TotalEarned += Gen7Earn * Gen7Owned * time;}
        if (Gen8Owned > 0){
            TotalEarned += Gen8Earn * Gen8Owned * time;}
        if (Gen9Owned > 0){
            TotalEarned += Gen9Earn * Gen9Owned * time;}
        if (Gen10Owned > 0){
            TotalEarned += Gen10Earn * Gen10Owned * time;}
        if (Gen11Owned > 0){
            TotalEarned += Gen11Earn * Gen11Owned * time;}
        if (Gen12Owned > 0){
            TotalEarned += Gen12Earn * Gen12Owned * time;}
        if (Gen13Owned > 0){
            TotalEarned += Gen13Earn * Gen13Owned * time;}
        if (Gen14Owned > 0){
            TotalEarned += Gen14Earn * Gen14Owned * time;}
        if (afterSlash === "main.html" || afterSlash === 'Menu.html'){if (TotalEarned > 0) {displayOfflineEarnings()}}
        } catch (err) {

            console.log("error" , err);
            AndroidApp.closeApp();
        }
}
zeItems = []
let TotalEarned = 0
findLastTime();
updateElapsedTime();
setInterval(updateElapsedTime, 1000);
