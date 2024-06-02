let angulo = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    angulo = input.compassHeading()
    basic.showNumber(angulo)
    if (angulo > 330) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    if (angulo < 30) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
    if (angulo > 160 && angulo < 210) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # #
            . . . . #
            . # # # #
            `)
    }
})
