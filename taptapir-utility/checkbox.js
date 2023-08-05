class Checkbox extends Button {
    constructor(options = false) {
        let settings = {text: '',state: false,parent: camera.ui,scale: [0.05, 0.05],roundness: 0.2,text_origin: [0, 0],};
        
        if (typeof options === 'boolean') {
            settings.state = options;
        } else if (typeof options === 'object') {
            for (const [key, value] of Object.entries(options)) {
                settings[key] = value;
            }
        }
        
        super(settings);
        
        this._value = settings['state'];
        if (!this._value) {
            this.text = '';
        } else {
            this.text = 'x';
        }
        
        this.on_click = function () {
            this.value = !this._value;
            
        };
    }
    
    get value() {
        return this._value;
    }
    
    set value(newValue) {
        this._value = newValue;
        if (!this._value) {
            this.text = '';
        } else {
            this.text = 'x';
        }
    }
}