$(function() {
    const fancyTimer = document.getElementsByClassName('fancy-timer-1')[0]
    const fancyTimerBar = new TimerBar(fancyTimer, {
        // mode: "fill",
        // anchor: "bottom",
        // height: "50px",
        // width: "10px",
        // duration: 500,
        timingFunction: 'linear',
        // background: 'red',
        delay: [200, 200],
        triggered: function() {
            $(this.el).parents('.fancy-box').fadeIn()
        },
        finished: function() {
            $(this.el).parents('.fancy-box').fadeOut()
        }
    })
    
    document.getElementById('fancy-trigger').onclick = () => fancyTimerBar.trigger()
})