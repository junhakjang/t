radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Backwards()
    }
    if (receivedNumber == 2) {
        Forward()
    }
    if (receivedNumber == 3) {
        left()
    }
    if (receivedNumber == 4) {
        Right()
    }
})
function Forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
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
    pins.servoSetPulse(AnalogPin.P13, 0)
}
input.onButtonPressed(Button.A, function () {
    Forward()
})
input.onButtonPressed(Button.B, function () {
    Backwards()
})
function Backwards () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function Right () {
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(2200000)
    pins.servoSetPulse(AnalogPin.P8, 0)
}
function Stop () {
    pins.servoSetPulse(AnalogPin.P13, 0)
    pins.servoSetPulse(AnalogPin.P8, 0)
}
let phantom_thing = 0
let distanc = 0
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
distanc = 10
basic.forever(function () {
    phantom_thing = 0
    for (let index = 0; index < 4; index++) {
        Sonar()
        if (distanc <= 10) {
            phantom_thing += 1
        }
    }
    if (phantom_thing == 4) {
        left()
        Forward()
        Forward()
    }
})
