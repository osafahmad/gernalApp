// fade animation
const FadeTransition = (index, position) => {
    const sceneRange = [index - 1, index];
    const outputOpacity = [0, 1];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity
    });
    return {
        opacity: transition
    }
}

//bottom animation
const BottomTransition = (index, position, height) => {
    const sceneRange = [index - 1, index];
    const outputHeight = [height, 0];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputHeight
    });
    return {
        transform: [{translateY: transition}]
    }
}

export const NavigationConfig = () => {
    return {
        screenInterpolator: (screenProps) => {
            const position = screenProps.position;
            const scene = screenProps.scene;
            const index = scene.index;
            const height =screenProps.layout.initHeight;
            // return FadeTransition(index, position);
            return BottomTransition(index, position, height);
        }
    }
}