basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) > 12) {
        basic.showIcon(IconNames.Yes)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 128)
        basic.pause(200)
    }
    if (randint(1, 2) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    basic.pause(50)
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(500)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(500)
})
basic.forever(function () {
	
})
