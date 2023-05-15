function Base () {
    strip.showRainbow(1, 255)
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setBrightness(2)
Base()
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        strip.setBrightness(10 * index)
        Base()
        basic.pause(100)
    }
})
