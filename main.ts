input.onPinPressed(TouchPin.P0, function () {
    music.play(music.stringPlayable("G C5 C5 C5 C C C C ", 131), music.PlaybackMode.UntilDone)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.Scissors)
basic.forever(function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
})
