
let score = int(save_system_load("score"));
let Gen1Owned = int(save_system_load("gen1owned"));
if (! Gen1Owned || Gen1Owned === null) {
    Gen1Owned = 0}
function applyScore() {
    try {
    score += 1 * Gen1Owned;
    score
    after(1, function() {
        save_system_save("score", score);
        applyScore();
    })} catch (err) {
        
        console.log("error" , err);
        AndroidApp.closeApp();
    }
   
}
applyScore();