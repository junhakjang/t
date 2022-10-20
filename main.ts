function Backwads () {
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function Sonar () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distanc = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function left () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(2200000)
    pins.servoSetPulse(AnalogPin.P8, 0)
    Forward2()
    Forward3()
}
input.onButtonPressed(Button.A, function () {
    Forward2()
    Forward3()
})
function Forward3 () {
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function Forward2 () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.B, function () {
    Backwads()
    Backwads2()
})
function Stop () {
    pins.servoSetPulse(AnalogPin.P13, 0)
    pins.servoSetPulse(AnalogPin.P8, 0)
}
function Backwads2 () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
}
let distanc = 0
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
distanc = 10
basic.forever(function () {
	
})
