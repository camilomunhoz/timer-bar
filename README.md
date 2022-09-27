# TimerBar JS

## Introduction
TimerBar JS brings a visual and minimalist way to put a timer in your website. It is simple, lightweight and easy to use.

## Basic usage

```js
const fancyTimerBar = new TimerBar(myElement, myOptions);
fancyTimerBar.trigger();
```

## Options

You might easily customize your TimerBar through its options.

It can either be passed in the constructor like this:
```js
const fancyTimerBar = new TimerBar(myElement, {
    mode: "fill",
    anchor: "bottom",
    height: "50px",
    width: "10px",
});
```
Or after, accessing the properties directly:
```js
const fancyTimerBar = new TimerBar(myElement);
fancyTimerBar.mode = "fill";
fancyTimerBar.anchor = "bottom";
fancyTimerBar.height = "50px";
fancyTimerBar.width = "10px";
```

### Styling

- `width` - Sets the width of the TimerBar. It comports all [CSS units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages), like `px` and `em`. Integer values like `100` will not work.

- `height` - Works in the same way as the `width` property.

- `barBackground` - Sets the color of the animated bar. It is supported any [CSS background definitions](https://developer.mozilla.org/en-US/docs/Web/CSS/background) such as plain colors, gradients and images.

- `background` - Change the background of the container likewise the `barBackground` option.

### Behavior
- `mode` - Defines the main behavior of the TimerBar. It can be:
    - `empty` - Starts filled and empties out.
    - `fill` - Starts empty and get filled.

- `anchor` - Sets the anchor point of the animation, being possible the values: `left`, `right`, `top` and `bottom`
  > For better understanding: A TimerBar with `left` anchor empties out to the left and gets filled from the left.  

  > **Notice:** when the anchor is `left` or `right`, the bar will have its <ins>width</ins> animated. If it is `top` or `bottom`, its <ins>height</ins> will be instead. 

- `duration` - Determine, in milisseconds, how long the animation will take.

- `delay` - Delays the animation start and the finish event. To define the delay, it is necessary to pass an array whose first index sets the `animationStartDelay` and the second sets the `finishDelay`.  
  > **Example:** `{delay: [200, 400]}` - the animation starts after 200ms and the finish event is triggered 400ms later.

- `timingFunction` - Set the timing function which the animation will operate on. All [CSS timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) types are supported.

### Callback functions
```js
{
    triggered: function() {
        console.log("I have been triggered!");
    }
}
```

- `triggered` - Do something when the TimerBar starts to act, regardless of the delay.
- `finished` - Do something when everything is done, even the finish delay.
- `started` - [*future implementation*] - Do something when the animation starts, considering the delay.
- `ended` - [*future implementation*] - Do something when the animation ends.
- `paused` - [*future implementation*]
- `resumed` - [*future implementation*]
- `reseted` - [*future implementation*]

> **Notice:** In the callback functions, the `this` keyword will be binded to the TimerBar instance. It's handy to use `this.el` to access the DOM element of it or even manipulate its options. Eg.: `this.background = "#000"`.

### Default values

| Option         | Value     |
|----------------|-----------|
| width          | "100%"    |
| height         | "20px"    |
| barBackground  | "#ccc"    |
| background     | "#007bff" |
| mode           | "empty"   |
| anchor         | "left"    |
| duration       | 2000      |
| delay          | [0, 0]    |
| timingFunction | "ease"    |

## Events

- `trigger()` - Starts the show!
- `reset()` - Redefine the TimerBar to its initial state.
- `reverse()` - Plays the contrary animation.
- `pause()` - *[future implementation]*
- `resume()` - *[future implementation]*