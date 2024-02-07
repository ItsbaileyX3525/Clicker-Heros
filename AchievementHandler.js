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
        let settings = {parent:camera.ui,title:'',textsText:"ACHIEVEMENT UNLOCKED!",scale:[.7,.1],xy:[1.25,.33],icon:'',roundness:.1,color:hsv(0,0,.15)}
    for (const [key, value] of Object.entries(options)) {
        settings[key] = value
    }
    super(settings)
    this.animate('x', .55, 1.25)
    this.soundfx = new Audio('voiceLines/Leon/ult.ogg')
    this.soundfx.play()
    this.soundfx.volume = volume
    this.iconShower = new Entity({parent:this,texture:this.icon,scale:[.25,.9],xy:[.3,0]})
    this.texts = new Text({text:this.textsText,text_size:2.725,x:-.1,y:-.05,parent:this,text_color:color.green})
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
clicked100achievement = save_system_load('clicked100achievement') || 0;
clicked500achievement = save_system_load('clicked500achievement') || 0;
clicked1250achievement = save_system_load('clicked1250achievement') || 0;
clicked2500achievement = save_system_load('clicked2500achievement') || 0;
clicked5000achievement = save_system_load('clicked5000achievement') || 0;
clicked10000achievement = save_system_load('clicked10000achievement') || 0;

amountEarned100 = save_system_load('amountearned100') || 0;
amountEarned10000 = save_system_load('amountearned10000') || 0;
amountEarned25000 = save_system_load('amountearned25000') || 0;
amountEarned50000 = save_system_load('amountearned50000') || 0;
amountEarned69000 = save_system_load('amountearned69000') || 0;
amountEarned125000 = save_system_load('amountearned125000') || 0;
amountEarned250000 = save_system_load('amountearned250000') || 0;
amountEarned500000 = save_system_load('amountearned500000') || 0;

spent1godlyclick = save_system_load('spent1godlyclick') || 0;
spent10godlyclick = save_system_load('spent10godlyclick') || 0;
spent25godlyclick = save_system_load('spent50godlyclick') || 0;
spent50godlyclick = save_system_load('spent1godlyclick') || 0;
spent75godlyclick = save_system_load('spent10godlyclick') || 0;
spent100godlyclick = save_system_load('spent50godlyclick') || 0;
spent150godlyclick = save_system_load('spent1godlyclick') || 0;

playedforhour = save_system_load('playedforhour') || 0;
playedfor3day = save_system_load('playedfor3day') || 0;
playedforweek = save_system_load('playedforweek') || 0;
playedforfortnite = save_system_load('playedforfortnite') || 0;
playedfor3week = save_system_load('playedfor3week') || 0;
playedformonth = save_system_load('playedformonth') || 0;
playedforyear = save_system_load('playedforyear') || 0;

//Custom achievements  secret achievements
prestigeLevel = int(save_system_load('prestigelevel'));
achievedmaxprestige = save_system_save('achievedmaxprestige') || 0;
escapedShadowRealm = save_system_load("escapedshadowrealm") || 0;

achievementCounter = save_system_load('achievementcounter')
if (!achievementCounter || achievementCounter === null){
    achievementCounter = 0;
}
AchievementHandler = new Entity({ alpha: 0 });
AchievementHandler.update = function () {
    switch (true) {
        case escapedShadowRealm == 2:
            achievedmaxprestige = 1;
            save_system_save('escapedshadowrealm', escapedShadowRealm);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/VWZ3VC8/Welcome-Jimbo.webp', title:'Escaped shadow realm!' });  
            break;      
        case prestigeLevel >= 10:
            achievedmaxprestige = 1;
            save_system_save('achievedmaxprestige', achievedmaxprestige);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/ZHPdsdR/Gen-Upgrade-Arrow.webp', title:'Reached max prestige!' });  
            break;  
        case timeCounter >= 60 * 60 && !playedforhour:
            playedforhour = 1;
            save_system_save('playedforhour', playedforhour);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/w4hZR1b/Cock-i-mean-clock.webp', title:'Played for an hour!' });  
            break;
        case timeCounter >= 3 * 24 * 60 * 60 && !playedfor3day:
            playedfor3day = 1;
            save_system_save('playedfor3day', playedfor3day);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/w4hZR1b/Cock-i-mean-clock.webp', title:'Played for 3 days!' });  
            break;
        case timeCounter >= 7 * 24 * 60 * 60 && !playedforweek:
            playedforweek = 1;
            save_system_save('playedforweek', playedforweek);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/w4hZR1b/Cock-i-mean-clock.webp', title:'Played for a week!' });  
            break;
        case overallScoreEarned >= 100 && !amountEarned100:
            amountEarned100 = 1;
            save_system_save('amountearned100', amountEarned100);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'100 score earnt!' });  
            break;
        case overallScoreEarned >= 10000 && !amountEarned10000:
            amountEarned10000 = 1;
            save_system_save('amountearned10000', amountEarned10000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'100 score earnt!' });  
            break;
        case overallScoreEarned >= 25000 && !amountEarned25000:
            amountEarned25000 = 1;
            save_system_save('amountearned25000', amountEarned25000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'100 score earnt!' });  
            break;
        case overallScoreEarned >= 50000 && !amountEarned50000:
            amountEarned50000 = 1;
            save_system_save('amountearned50000', amountEarned50000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'50000 score earnt!' });  
            break;
        case overallScoreEarned >= 69000 && !amountEarned69000:
            amountEarned69000 = 1;
            save_system_save('amountearned69000', amountEarned69000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'69000 score earnt!', textsText:"SECRET UNLOCKED"});  
            break;
        case overallScoreEarned >= 125000 && !amountEarned125000:
            amountEarned125000 = 1;
            save_system_save('amountearned125000', amountEarned125000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'50000 score earnt!' });  
            break;
        case overallScoreEarned >= 250000 && !amountEarned250000:
            amountEarned250000 = 1;
            save_system_save('amountearned250000', amountEarned250000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'250000 score earnt!' });  
            break;
        case overallScoreEarned >= 500000 && !amountEarned500000:
            amountEarned500000 = 1;
            save_system_save('amountearned500000', amountEarned500000);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'250000 score earnt!' });  
            break;
        case overallScoreEarned >= 69000 && !callumWouldBeProud:
            callumWouldBeProud = 1;
            save_system_save('callumWouldBeProud', callumWouldBeProud);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/7gywknG/clicker-Gen1.webp', title:'250000 score earnt!' });  
            break;
        case timesClicked >= 1 && !clicked1achievement:
            clicked1achievement = 1;
            save_system_save('clickedonceachievement', clicked1achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'First click!' });
            break;
        case timesClicked >= 100 && !clicked100achievement:
            clicked100achievement = 1;
            save_system_save('clicked100achievement', clicked100achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'First click!' });
            break;
        case timesClicked >= 500 && !clicked500achievement:
            clicked500achievement = 1;
            save_system_save('clicked500achievement', clicked500achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'First click!' });
            break;
        case timesClicked >= 1250 && !clicked1250achievement:
            clicked1250achievement = 1;
            save_system_save('clicked1250achievement', clicked1250achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'First click!' });
            break;
        case timesClicked >= 2500 && !clicked2500achievement:
            clicked2500achievement= 1;
            save_system_save('clicked2500achievement', clicked2500achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'2500 clicks!' });
            break;
        case timesClicked >= 5000 && !clicked5000achievement:
            clicked5000achievement= 1;
            save_system_save('clicked5000achievement', clicked5000achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'2500 clicks!' });
            break;
        case timesClicked >= 10000 && !clicked10000achievement:
            clicked10000achievement = 1;
            save_system_save('clicked10000achievement', clicked10000achievement);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({alpha: 1, icon: 'https://i.ibb.co/mJvKZX2/Clicker-idle.gif', title:'Reached 10k clicks!' });
            break;
        case godlyClicksTracker >= 1 && !spent1godlyclick:
            spent1godlyclick = 1;
            save_system_save('spent1godlyclicks', spent1godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'First godly click!' });
            break;
        case godlyClicksTracker >= 10 && !spent10godlyclick:
            spent10godlyclick = 1;
            save_system_save('spent10godlyclicks', spent10godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueue.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'Spent 10 godly clicks!' });
            break;
        case godlyClicksTracker >= 25 && !spent25godlyclick:
            spent25godlyclick = 1;
            save_system_save('spent25godlyclick', spent25godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'Spent 25 godly clicks!' });
        case godlyClicksTracker >= 50 && !spent50godlyclick:
            spent50godlyclick = 1;
            save_system_save('spent50godlyclick', spent50godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'Spent 50 godly clicks!' });
        case godlyClicksTracker >= 75 && !spent75godlyclick:
            spent75godlyclick = 1;
            save_system_save('spent75godlyclick', spent75godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'Spent 75 godly clicks!' });
        case godlyClicksTracker >= 100 && !spent100godlyclick:
            spent100godlyclick = 1;
            save_system_save('spent50godlyclick', spent100godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'Spent 100 godly clicks!' });
        case godlyClicksTracker >= 150 && !spent150godlyclick:
            spent150godlyclick = 1;
            save_system_save('spent150godlyclick', spent150godlyclick);
            achievementCounter+=1
            save_system_save('achievementcounter', achievementCounter);
            achievementQueueMAX.push({ alpha: 1, icon: 'https://i.ibb.co/QP3kC9J/Godly-Click.webp', title:'Spent 150 godly clicks!' });
            break;}
    AchievementShower.showNext();
    AchievementShowerMAX.showNext();
  };