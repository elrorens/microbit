let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 10)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
        timer += -1
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.Skull)
    }
})
