

    var carousel = document.getElementsByClassName("item"),
        bLeft = document.getElementById("left"),
        bRight = document.getElementById("right")
        counter = 0;

    bRight.addEventListener('click', moveRight);
    bLeft.addEventListener('click', moveLeft);

    function moveRight() {
        console.log("right");
        if (counter > -2) {
            if (counter === 0) {
                for (let i = 0; i <= 2; i++) {
                    carousel[i].className = "car-image-cont item move";
                }
            } else if (counter === -1) {
                for (let i = 0; i <= 2; i++) {
                    carousel[i].className = "car-image-cont item move1";
                }
            }
            counter--;
        }
        
    }

    function moveLeft() {
        console.log("left");
        if (counter < 0) {
            if (counter === -2 ) {
                for (let i = 0; i <= 2; i++) {
                    carousel[i].className = "car-image-cont item move";
                }
            } else if (counter === -1 ) {
                for (let i = 0; i <= 2; i++) {
                    carousel[i].className = "car-image-cont item";
                }
            }
            
            counter++;
        }

    }



