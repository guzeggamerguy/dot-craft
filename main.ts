radio.onReceivedNumber(function (receivedNumber) {
    if (Mode1 == 0) {
        if (receivedNumber == 21) {
            Player_2.set(LedSpriteProperty.X, 1)
        }
        if (receivedNumber == 22) {
            Player_2.set(LedSpriteProperty.Y, -1)
        }
        if (receivedNumber == 23) {
            Player_2.set(LedSpriteProperty.X, -1)
        }
        if (receivedNumber == 24) {
            Player_2.set(LedSpriteProperty.Y, 1)
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    Player_1.change(LedSpriteProperty.Y, -1)
    radio.sendNumber(18)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player_1.change(LedSpriteProperty.X, -1)
    radio.sendNumber(19)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    if (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)) {
        game.resume()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    Player_1.change(LedSpriteProperty.X, 1)
    radio.sendNumber(17)
})
input.onGesture(Gesture.LogoDown, function () {
    Player_1.change(LedSpriteProperty.Y, 1)
    radio.sendNumber(20)
})
let Player_2: game.LedSprite = null
let Player_1: game.LedSprite = null
let Mode1 = 0
radio.setGroup(1)
basic.showLeds(`
    # . # . #
    . . # . .
    # # # # #
    . . # . .
    # . # . #
    `)
basic.showString("Dot-Craft")
let Choose12 = 1
while (Choose12 == 1) {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        Choose12 = 0
        Mode1 = 1
        Player_1 = game.createSprite(0, 0)
    }
    basic.pause(1000)
    basic.showLeds(`
        . . # # .
        . # . . #
        . . . . #
        . . . # .
        . # # # #
        `)
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        Choose12 = 0
        Player_1 = game.createSprite(0, 0)
        Player_2 = game.createSprite(4, 0)
    }
    basic.pause(1000)
}
