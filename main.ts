input.onButtonPressed(Button.A, function () {
    m1 = 6
})
input.onButtonPressed(Button.B, function () {
    m3 = 6
})
let m3 = 0
let m1 = 0
m1 = 0
m3 = 0
SuperBit.MotorStopAll()
basic.forever(function () {
    if (m1 > 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    } else {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    }
    if (m3 > 0) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    }
    basic.pause(100)
    m1 += -1
    m3 += -1
})
