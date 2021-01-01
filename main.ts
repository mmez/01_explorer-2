input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(100)
    GO = 1
})
input.onButtonPressed(Button.B, function () {
    GO = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.pause(200)
    basic.clearScreen()
})
let GO = 0
GO = 0
basic.forever(function () {
    if (GO > 0) {
        Proxi.vorwärts()
        if (Proxi.LBlock(600)) {
            Proxi.linksdrehung()
            images.createImage(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `).scrollImage(1, 100)
            Proxi.drehungsstopp()
        } else if (Proxi.RBlock(400)) {
            Proxi.rechtsdrehung()
            images.createImage(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `).scrollImage(1, 100)
            Proxi.stehenbleiben()
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    Proxi.drehungsstopp()
    Proxi.stehenbleiben()
})
