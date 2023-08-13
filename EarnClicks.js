
let score = int(save_system_load("score"));
Gen1Owned = int(save_system_load("gen1owned"));
Gen2Owned = int(save_system_load("gen2owned"));
Gen3Owned = int(save_system_load("gen3owned"));
Gen4Owned = int(save_system_load("gen4owned"));
const variablesToCheck = ['Gen1Owned', 'Gen2Owned', 'Gen3Owned', 'Gen4Owned'];

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
    if (startTime - lastVisitTime > 300) {
        if (startTime - lastVisitTime >= 259200) {
            const elapsedTime = 259200
            offlineEarn(elapsedTime)
        } else {
        const elapsedTime = startTime - lastVisitTime;
        offlineEarn(elapsedTime);
        }
    }
}

function offlineEarn(time) {
    try {
        if (Gen1Owned > 0){
        score = Math.round((score + 0.1 * Gen1Owned * time) * 10) / 10 ;
        }
        if (Gen2Owned > 0){
            score += 1 * Gen1Owned * time;}
        if (Gen3Owned > 0){
        score += 8 * Gen3Owned * time;}
        if (Gen4Owned > 0){
            score += 47 * Gen4Owned;}
        save_system_save("score", score);
        } catch (err) {
            
            console.log("error" , err);
            AndroidApp.closeApp();
        }   
}

findLastTime();
updateElapsedTime();
setInterval(updateElapsedTime, 1000);