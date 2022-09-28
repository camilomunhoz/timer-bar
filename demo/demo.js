$(function() {

    const tbExample = new TimerBar(document.getElementById('tb-example'))
    $('.event-triggers').on('click', function() {
        tbExample[$(this).data('event')]()
    })

    let options = {}

    $('input').on('input', function() {
        $('input[type=radio]').each(function() {
            if ($(this).is(':checked')) options[this.name] = this.value
        })
        $('input[type=text]').each(function() {
            if (this.value) options[this.name] = this.value
        })
        console.log(options)
        tbExample.setOptions(options)
    })
    
    // $('input[name=anchor]').on('input', function() {
    //     tbExample.setOptions({anchor: this.value})
    // })
    
    // $('input[name=width]').on('input', function() {
    //     tbExample.setOptions({width: this.value})
    // })
    
    // $('input[name=height]').on('input', function() {
    //     tbExample.setOptions({height: this.value})
    // })

    /* -------------------------------------------------------------------------- */
    /*                                 EXAMPLE #1                                 */
    /* -------------------------------------------------------------------------- */

    // const ex1 = $('#example-1 .tb-example')
    // const tbEl_1 = ex1.get(0)
    // const tbEl_2 = ex1.get(1)
    // const tbEl_3 = ex1.get(2)
    // const tbEl_4 = ex1.get(3)
    // const tb1 = new TimerBar(tbEl_1, {anchor: 'left'})
    // const tb2 = new TimerBar(tbEl_2, {anchor: 'right'})
    // const tb3 = new TimerBar(tbEl_3, {anchor: 'top'})
    // const tb4 = new TimerBar(tbEl_4, {anchor: 'bottom'})
    // $(tbEl_1).siblings('.tb-trigger').click(() => tb1.trigger())
    // $(tbEl_2).siblings('.tb-trigger').click(() => tb2.trigger())
    // $(tbEl_3).siblings('.tb-trigger').click(() => tb3.trigger())
    // $(tbEl_4).siblings('.tb-trigger').click(() => tb4.trigger())

    // const fancyTimer = document.getElementsByClassName('fancy-timer-1')[0]
    // const fancyTimerBar = new TimerBar(fancyTimer, {
    //     // mode: "fill",
    //     // anchor: "bottom",
    //     // height: "50px",
    //     // width: "10px",
    //     // duration: 500,
    //     timingFunction: 'linear',
    //     // background: 'red',
    //     delay: [200, 200],
    //     triggered: function() {
    //         $(this.el).parents('.fancy-box').fadeIn()
    //     },
    //     finished: function() {
    //         $(this.el).parents('.fancy-box').fadeOut()
    //     }
    // })
    
    // document.getElementById('fancy-trigger').onclick = () => fancyTimerBar.trigger()
})