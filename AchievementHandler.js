let achievementInProgress = false;
const achievementQueue = [];

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

achievement1unlocked = save_system_load('achievement1unlocked') || 0;

AchievementHandler = new Entity({ alpha: 0 });
AchievementHandler.update = function () {
    if (score >= 1 && !achievement1unlocked) {
        achievement1unlocked = 1;
        console.log('saved');
        save_system_save('achievement1unlocked', achievement1unlocked);
        achievementQueue.push({ alpha: 1, icon: 'Clicker-idle.gif', title:'First click!' });        
    } 




    AchievementShower.showNext();
};
