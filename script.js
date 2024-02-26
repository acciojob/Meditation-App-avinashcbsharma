let timer;
        let isPlaying = false;

        function changeAudio(audioSrc) {
            document.getElementById("meditationAudio").src = audioSrc;
            if (isPlaying) {
                playPause();
            }
        }

        function setTime(minutes) {
            const display = document.getElementById("time-display");
            display.innerText = `${minutes}:00`;
        }

        function togglePlayPause() {
            if (isPlaying) {
                playPause(false);
            } else {
                playPause(true);
            }
        }

        function playPause(play = true) {
            const video = document.getElementById("meditationVideo");
            const audio = document.getElementById("meditationAudio");
            const playButton = document.querySelector(".play");

            if (play) {
                video.play();
                audio.play();
                playButton.innerText = "Pause";
                startTimer();
            } else {
                video.pause();
                audio.pause();
                playButton.innerText = "Play";
                clearTimeout(timer);
            }

            isPlaying = !isPlaying;
        }

        function startTimer() {
            const display = document.getElementById("time-display");
            const time = display.innerText.split(":");
            let minutes = parseInt(time[0]);
            let seconds = parseInt(time[1]);

            timer = setInterval(() => {
                if (minutes === 0 && seconds === 0) {
                    playPause(false);
                    display.innerText = "10:00"; // Reset time to default after meditation ends
                    alert("Meditation completed!");
                    return;
                }

                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }

                display.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }, 1000);
        }
