let achievementInProgress = false;
const achievementQueue = [];
let achievementInProgressMAX = false;
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
    this.soundfx = new Audio('assets/rising.wav')
    this.soundfx.play()
    this.soundfx.volume = volume
    this.texts = new Text({text:'ACHIEVEMENT UNLOCKED!',text_size:2.725,x:-.1,y:-.05,parent:this,text_color:color.green})
    this.title = new Text({text:this.title,xy:[0,0],parent:this,text_size:3,x:-.1,y:-.75,parent:this,text_color:color.white})
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

/*
Used for showing epic achievements, will look like how minecraft's
achievement get icon looks, to see what I mean just go to this link:
https://www.youtube.com/watch?v=RAcfzyNkTVw
*/
class AchievementShowerMAX extends Entity {
    constructor(options = false) {
        let settings = {parent:camera.ui,title:'',scale:[.4,.25],xy:[0.688,-.63],icon:'',roundness:.1,color:color.black}
    for (const [key, value] of Object.entries(options)) {
        settings[key] = value
    }
    super(settings) 
    this.iconShower = new Entity({parent:this,texture:this.icon,scale:[.5,.5]})
    this.animate('y', -.4, 1.5)
    this.soundfx = new Audio('assets/rising.wav')
    this.soundfx.play()
    this.soundfx.volume = volume
    this.texts = new Text({text:'ACHIEVEMENT UNLOCKED!',text_size:2.725,x:-.1,y:-.05,parent:this,text_color:color.green})
    this.title = new Text({text:this.title,xy:[0,0],parent:this,text_size:3,x:-.1,y:-.75,parent:this,text_color:color.white})
}
    
    static showNext() {
        if (!achievementInProgressMAX && achievementQueueMAX.length > 0) {
            achievementInProgressMAX = true;
            const achievementOptions = achievementQueue.shift();
            const achievement = new AchievementShowerMAX(achievementOptions);
            achievement.onComplete(() => {
                achievementInProgressMAX = false;
                AchievementShowerMAX.showNext();
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

clicked1achievement = save_system_load('clickedonceachievement') || 0;
clicked5000achievement = save_system_load('clicked5000achievement') || 0;
clicked250000achievement = save_system_load('clicked250000achievement') || 0;

let spent1godlyclick = save_system_load('spent1godlyclicks') || 0;
//score=250000 

AchievementHandler = new Entity({ alpha: 0 });
AchievementHandler.update = function () {
    if (score >= 1 && !clicked1achievement) {
        clicked1achievement = 1;
        save_system_save('clickedonceachievement', clicked1achievement);
        achievementQueue.push({ alpha: 1, icon: 'Clicker-idle.gif', title:'First click!' });
    } 
    if (score >= 5000 && !clicked5000achievement) {
        clicked5000achievement = 1;
        save_system_save('clicked5000achievement', clicked5000achievement);
        achievementQueue.push({ alpha: 1, icon: 'clickerManLevel2.webp', title:'5000 clicks!' });
    } 
    if (score >= 250000 && !clicked250000achievement) {
        clicked250000achievement = 1;
        save_system_save('clicked250000achievement', clicked250000achievement);
        achievementQueue.push({ alpha: 1, icon: 'clickerManLevel3.webp', title:'250000 clicks!' });
    } 
    if (godlyClicksTracker >= 1 && !spent1godlyclick){
        spent1godlyclick = 1;
        save_system_save('spent1godlyclicks', spent1godlyclick);
        achievementQueue.push({ alpha: 1, icon: 'GodlyClick.png', title:'First godly click!' });
    }


    AchievementShower.showNext();
};
