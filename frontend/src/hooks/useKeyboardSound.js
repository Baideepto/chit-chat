const keyStrokeSounds = [
    new Audio("/sounds/keystroke1.mp3"),
    new Audio("/sounds/keystroke1.mp3"),
    new Audio("/sounds/keystroke1.mp3"),
    new Audio("/sounds/keystroke1.mp3"),
];

function useKeyboardSound(){
    const playRandomKeyStrokeSound = () =>{
        const randomSound = keyStrokeSounds[Math.floor(Math.random()*keyStrokeSounds.length)];

        randomSound.currentTime = 0 ;
        randomSound.play().catch(error => console.log("Error in Audio playing",error));
    }

    return {playRandomKeyStrokeSound}
}

export default useKeyboardSound;