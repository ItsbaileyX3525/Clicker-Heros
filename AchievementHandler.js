//Shout out to snoroz and mawdaw for creating the awesome sound effect for the achievement, love it

let achievementInProgress = false;
const achievementQueue = [];
const achievementQueueMAX = [];
let volume = 1
class AchievementShower extends Entity {
    constructor(options = false) {
        let settings = {parent:camera.ui,title:'',scale:[.4,.25],xy:[0.688,-.63],icon:'',roundness:.1,color:color.black}
    for (const [key, value] of Object.entries(options)) {
        settings[key] = value
    }
    super(settings)
    this.iconShower = new Entity({parent:this,texture:this.icon,scale:[.5,.5]})
    this.animate('y', -.4, 1.5)
    this.soundfx = new Audio('assets/rising.ogg')
    this.soundfx.play()
    this.soundfx.volume = volume
    this.texts = new Text({text:'ACHIEVEMENT UNLOCKED!',text_size:2.725,x:-.1,y:-.05,parent:this,text_color:color.green})
    this.title = new Text({text:this.title,parent:this,text_size:3,x:-.1,y:-.75,parent:this,text_color:color.white})
}
    
    static showNext() {
        if (!achievementInProgress && achievementQueue.length > 0) {
            achievementInProgress = true;
            const achievementOptions = achievementQueue.shift();
            const achievement = new AchievementShower(achievementOptions);
            achievement.onComplete(() => {
                achievementInProgress = false;
                AchievementShower.showNext();
            });
        }
    }
     
    onComplete(callback) {
        after(3, () => {
            this.animate('y', -.63, 1.5)
            after(1.5, () => {destroy(this);
            if (typeof callback === 'function') {
                callback();
            }})
            
        });
    } 
}
class AchievementShowerMAX extends Entity {
    constructor(options = false) {
        let settings = {parent:camera.ui,title:'',scale:[.7,.1],xy:[1.25,.33],icon:'',roundness:.1,color:hsv(0,0,.15)}
    for (const [key, value] of Object.entries(options)) {
        settings[key] = value
    }
    super(settings)
    this.animate('x', .55, 1.25)
    this.soundfx = new Audio('voiceLines/Leon/ult.ogg')
    this.soundfx.play()
    this.soundfx.volume = volume
    this.iconShower = new Entity({parent:this,texture:this.icon,scale:[.25,.9],xy:[.3,0]})
    this.texts = new Text({text:'ACHIEVEMENT UNLOCKED!',text_size:2.725,x:-.1,y:-.05,parent:this,text_color:color.green})
    this.title = new Text({text:this.title,parent:this,text_size:3,x:-.1,y:-.5,parent:this,text_color:color.white})
}
    
    static showNext() {
        if (!achievementInProgress && achievementQueueMAX.length > 0) {
            achievementInProgress = true;
            const achievementOptions = achievementQueueMAX.shift();
            const achievement = new AchievementShowerMAX(achievementOptions);
            achievement.onComplete(() => {
                achievementInProgress = false;
                AchievementShowerMAX.showNext();
            });
        }
    }
      
    onComplete(callback) {
        after(3.5, () => {
            this.animate('x', 1.25 , 1.5)
            after(1.7, () => {destroy(this);
            if (typeof callback === 'function') {
                callback();
            }})
        });
    } 
}

clicked1achievement = save_system_load('clickedonceachievement') || 0;
clicked2500achievement = save_system_load('clicked2500achievement') || 0;
clicked10000achievement = save_system_load('clicked10000achievement') || 0;

playedforhour = save_system_load('playedforhour') || 0
playedfor3day = save_system_load('playedfor3day') || 0
playedforweek = save_system_load('playedforweek') || 0

amountEarned100 = save_system_load('amountearned100') || 0;
amountEarned50000 = save_system_load('amountearned50000') || 0;
amountEarned250000 = save_system_load('amountearned250000') || 0;

spent1godlyclick = save_system_load('spent1godlyclicks') || 0;
spent10godlyclick = save_system_load('spent10godlyclicks') || 0;
spent50godlyclick = save_system_load('spent50godlyclicks') || 0;

achievementCounter = save_system_load('achievementcounter')
if (!achievementCounter || achievementCounter === null){
    achievementCounter = 0;
}
AchievementHandler = new Entity({ alpha: 0 });
AchievementHandler.update = function () {
    if (timeCounter >= 60 * 60 && !playedforhour) {
        playedforhour = 1;
        save_system_save('playedforhour', playedforhour);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'Cock, i mean clock.webp', title:'Played for an hour!' });  
    } 
    if (timeCounter >= 3 * 24 * 60 * 60 && !playedfor3day) {
        playedfor3day = 1;
        save_system_save('playedfor3day', playedfor3day);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'Cock, i mean clock.webp', title:'Played for 3 days!' });  
    }
    if (timeCounter >= 7 * 24 * 60 * 60 && !playedforweek) {
        playedforweek = 1;
        save_system_save('playedforweek', playedforweek);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueueMAX.push({ alpha: 1, icon: 'Cock, i mean clock.webp', title:'Played for a week!' });  
    } 
    if (overallScoreEarned >= 100 && !amountEarned100){
        amountEarned100 = 1;
        save_system_save('amountearned100', amountEarned100);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'clickerGen1.webp', title:'100 score earnt!' });  
    }    
    if (overallScoreEarned >= 50000 && !amountEarned50000){
        amountEarned50000 = 1;
        save_system_save('amountearned50000', amountEarned50000);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'clickerGen1.webp', title:'50000 score earnt!' });  
    }
    if (overallScoreEarned >= 250000 && !amountEarned250000){
        amountEarned250000 = 1;
        save_system_save('amountearned250000', amountEarned250000);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueueMAX.push({ alpha: 1, icon: 'clickerGen1.webp', title:'250000 score earnt!' });  
    }
    if (timesClicked >= 1 && !clicked1achievement) {
        clicked1achievement = 1;
        save_system_save('clickedonceachievement', clicked1achievement);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'Clicker-idle.gif', title:'First click!' });
    } 
    if (timesClicked >= 2500 && !clicked2500achievement) {
        clicked2500achievement = 1;
        save_system_save('clicked2500achievement', clicked2500achievement);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'clickerManLevel2.webp', title:'2500 clicks!' });
    } 
    if (timesClicked >= 10000 && !clicked10000achievement) {
        clicked10000achievement = 1;
        save_system_save('clicked10000achievement', clicked10000achievement);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueueMAX.push({alpha: 1, icon: 'clickerManLevel3.webp', title:'Reached 10k clicks!' });
    } 
    if (godlyClicksTracker >= 1 && !spent1godlyclick){
        spent1godlyclick = 1;
        save_system_save('spent1godlyclicks', spent1godlyclick);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'GodlyClick.webp', title:'First godly click!' });
    }
    if (godlyClicksTracker >= 10 && !spent10godlyclick){
        spent10godlyclick = 1;
        save_system_save('spent10godlyclicks', spent10godlyclick);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueue.push({ alpha: 1, icon: 'GodlyClick.webp', title:'Spent 10 godly clicks!' });
    }
    if (godlyClicksTracker >= 50 && !spent50godlyclick){
        spent50godlyclick = 1;
        save_system_save('spent50godlyclicks', spent50godlyclick);
        achievementCounter+=1
        save_system_save('achievementcounter', achievementCounter);
        achievementQueueMAX.push({ alpha: 1, icon: 'GodlyClick.webp', title:'Spent 50 godly clicks!' });
    }


    AchievementShower.showNext();
    AchievementShowerMAX.showNext();
};