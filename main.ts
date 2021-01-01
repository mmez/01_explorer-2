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
        if (Proxi.LBlock(25)) {
            Proxi.stehenbleiben()
            Proxi.linksdrehung()
            images.createImage(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `).scrollImage(1, 50)
            Proxi.drehungsstopp()
        } else if (Proxi.RBlock(25)) {
            Proxi.stehenbleiben()
            Proxi.rechtsdrehung()
            images.createImage(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `).scrollImage(1, 50)
            Proxi.drehungsstopp()
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Proxi.vorwärts()
    }
    basic.showIcon(IconNames.Yes)
    basic.showNumber(Proxi.Lese_LBlock())
    Proxi.drehungsstopp()
    Proxi.stehenbleiben()
})
