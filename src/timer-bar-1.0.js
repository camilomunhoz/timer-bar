class TimerBar {
    constructor(el, options = {}) {
        this.el = el
        this.mode = options.mode || 'empty'
        this.anchor = options.anchor || 'left'
        this.duration = options.duration || 2000
        ;[this.animationStartDelay, this.finishDelay] = options.delay || [0, 0]
        this.timingFunction = options.timingFunction || 'ease'
        this.fillable = this.whichToFill(); // 'width'|'height
        
        this.width = options.width || '100%'
        this.height = options.height || '1em'
        this.barBackground = options.barBackground || '#007bff'
        this.background = options.background || '#ccc'

        this.triggered = options.triggered || null
        // this.started = options.started || null
        // this.stopped = options.stopped || null
        this.finished = options.finished || null
        this.mount()
    }
    mount() {
        this.setupBar()
        this.setupContainer()
        this.setTransition()
    }
    setupContainer() {
        this.el.style.background = this.background
        this.el.style.height = this.height
        this.el.style.width = this.width
        this.animate(true)
        this.el.style.position = 'relative'
    }
    setupBar() {
        this.bar = document.createElement('div')
        this.bar.style.background = this.barBackground
        this.bar.style.position = 'absolute'
        this.bar.style.height = '100%'
        this.bar.style.width = '100%'
        this.bar.style[this.anchor] = 0
        this.el.appendChild(this.bar)
    }
    setTransition(setup = `${this.fillable} ${this.timingFunction} ${this.duration/1000}s`) {
        this.bar.style.transition = setup
    }
    fillBar() {
        this.bar.style[this.fillable] = this[this.fillable]
    }
    emptyBar() {
        this.bar.style[this.fillable] = 0
    }
    animate(reverse = false) {
        if (reverse) {
            if (this.mode === 'empty') {
                this.fillBar()
            } else if (this.mode === 'fill') {
                this.emptyBar()
            } else {
                // throw Error
            }
        } else {
            if (this.mode === 'empty') {
                this.emptyBar()
            } else if (this.mode === 'fill') {
                this.fillBar()
            } else {
                // throw Error
            }
        }
        
    }
    whichToFill() {
        if (['top', 'bottom'].includes(this.anchor)) {
            return 'height'
        } else if (['left', 'right'].includes(this.anchor)) {
            return 'width'
        } else {
            // throw Error
        }
    }
    trigger() {
        this.callback('triggered')
        this.reset()
        setTimeout(() => this.animate(), this.animationStartDelay)
        setTimeout(() => this.callback('finished'), this.animationStartDelay + this.duration + this.finishDelay)
    }
    reverse() {
        this.animate(true)
    }
    reset() {
        this.setTransition()
        // this.fillBar()
        this.animate(true)
        setTimeout(() => this.setTransition(), 0)
    }
    callback(funName) {
        if (!this[funName]) return;
        (this[funName].bind(this))()
    }
}