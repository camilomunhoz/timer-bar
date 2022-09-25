class TimerBar {
    constructor(el, options = {}) {
        this.el = el
        this.duration = options.duration || 2000
        ;[this.triggerDelay, this.finishDelay] = options.delay || [0, 0]
        this.anchor = options.anchor || 'left'
        this.mode = options.mode || 'empty'
        this.timingFunction = options.timingFunction || 'ease'
        this.fillable = this.discoverFillable();
        
        this.width = options.width || '100%'
        this.height = options.height || '1em'
        this.barColor = options.barColor || '#007bff'
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
        this.fillBar()
        this.el.style.position = 'relative'
    }
    setupBar() {
        this.bar = document.createElement('div')
        this.bar.style.background = this.barColor
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
    animate() {
        if (this.mode === 'fill') {
            this.fillBar()
        } else if (this.mode === 'empty') {
            this.emptyBar()
        } else {
            // throw Error
        }
    }
    discoverFillable() {
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
        setTimeout(() => this.animate(), this.triggerDelay)
        setTimeout(() => this.callback('finished'), this.triggerDelay + this.duration + this.finishDelay)
    }
    reset() {
        this.setTransition('none')
        this.fillBar()
        // this.animate()
        setTimeout(() => this.setTransition(), 0)
    }
    callback(funName) {
        if (!this[funName]) return;
        (this[funName].bind(this))()
    }
}

/* ------------------------------------ - ----------------------------------- */

window.onload = function() {
    const fancyTimer = document.getElementsByClassName('fancy-timer-1')[0]
    const fancyTimerBar = new TimerBar(fancyTimer, {
        // duration: 500,
        // timingFunction: 'cubic-bezier(0.240, 0.890, 0.770, 0.090)',
        delay: [200, 200],
        triggered: function() {
            $(this.el).parents('.fancy-box').fadeIn()
        },
        finished: function() {
            $(this.el).parents('.fancy-box').fadeOut()
        }
    })
    
    document.getElementById('fancy-trigger').onclick = () => fancyTimerBar.trigger()
}