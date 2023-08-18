
let score = int(save_system_load("score"));
Gen1Owned = int(save_system_load("gen1owned"));
Gen2Owned = int(save_system_load("gen2owned"));
Gen3Owned = int(save_system_load("gen3owned"));
Gen4Owned = int(save_system_load("gen4owned"));
Gen5Owned = int(save_system_load("gen5owned"));
Gen6Owned = int(save_system_load("gen6owned"));
const variablesToCheck = ['Gen1Owned', 'Gen2Owned', 
'Gen3Owned', 'Gen4Owned', 'Gen5Owned', 'Gen6Owned',
];

for (const variable of variablesToCheck) {
    if (!window[variable] || window[variable] === null) {
        window[variable] = 0;
    }
}
function applyScore() {
    try {
    if (Gen1Owned > 0){
    score = Math.round((score + 0.1 * Gen1Owned) * 10) / 10;}
    if (Gen2Owned > 0){
        score += 1 * Gen2Owned;}
    if (Gen3Owned > 0){
    score += 8 * Gen3Owned;}
    if (Gen4Owned > 0){
      score += 47 * Gen4Owned;}
    if (Gen5Owned > 0){
        score += 260 * Gen5Owned;}
    if (Gen6Owned > 0){
        score += 1400 * Gen6Owned;}
    after(1, function() {
        save_system_save("score", score);
        applyScore();
    })} catch (err) {
        
        console.log("error" , err);
        AndroidApp.closeApp();
    }
   
}
applyScore();


//Used to credit player score if offline up to 3 days
//Why? Because im kind :)
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

function doubleDaMoneyFunc() {score += TotalEarned *2
  for (var e of zeItems) {
    e.enabled = false
}
}

function displayOfflineEarnings() {
    const amount = TotalEarned;
    
    lastplayedscreen = new Entity({name:'lastplayedscreen ', parent:camera.ui,texture:'earnedGradient.jpg',scale:[1.2,1],z:-2})
    earnedSinceLastPlayed = new Text({name:'earnedSinceLastPlayed ', xy:[.1,-.0],text_size:5,text:`Earned since last online:`,z:-2})
    totalAmountEarned = new Text({name:'totalAmountEarned ', text:`${_formatNumber(amount)}`,z:-2,text_size:8,xy:[.28,-.4],text_color:color.white})
    confirmDaMoney = new Button({name:'confirmDaMoney ', text:'OK',z:-2,scale:[.15,.1],y:-.4,x:.3})
    doubleDaMoney = new Button({name:'doubleDaMoney ', text:'X2 money',z:-2,scale:[.16,.1],color:color.green,xy:[-.3,-.4]})
    confirmDaMoney.on_click = function() {
        score += amount
        save_system_save("score", amount);
        for (var e of zeItems) {
            e.enabled = false
        }
    }
    doubleDaMoney.on_click = function(){
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
        TotalEarned += 1 * Gen1Owned * time;}
        if (Gen3Owned > 0){
        TotalEarned += 8 * Gen3Owned * time;}
        if (Gen4Owned > 0){
        TotalEarned += 47 * Gen4Owned;}
        if (afterSlash === "main.html" || afterSlash === 'Menu.html'){displayOfflineEarnings()}
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