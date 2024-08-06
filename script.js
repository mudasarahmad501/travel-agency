const card_hover = document.querySelectorAll(".card-hover-effect");
// const card_hover_button = document.querySelectorAll(".card-hover-btn");

card_hover.forEach(cards =>{
    cards.addEventListener('mouseenter', ()=>{
        const card_hover_button = cards.querySelector('.card-hover-btn');
        card_hover_button.style.display = "block";
    })
    cards.addEventListener('mouseleave', ()=>{
        const card_hover_button = cards.querySelector('.card-hover-btn');
        card_hover_button.style.display = "none";
    })
})

//  ----------------------Testimonial --------------------------//

let isHiddenCardVisible = false;

        function showHiddenCard() {
            var hiddenCard = document.getElementById("hiddenCard");
            var firstCard = document.getElementById("firstCard");
            
            if (!isHiddenCardVisible) {
                hiddenCard.style.transform = "translateY(0) translateX(0)";
                hiddenCard.style.zIndex = "3"; // Bring the hidden card over the first card
                firstCard.style.transform = "translateY(100px) translateX(50px)";
                firstCard.style.zIndex = "2"; // Push the first card behind
            } 

            isHiddenCardVisible = true;
        }

        function showFirstCard() {
            var hiddenCard = document.getElementById("hiddenCard");
            var firstCard = document.getElementById("firstCard");
            
            if (isHiddenCardVisible) {
                hiddenCard.style.transform = "translateY(100px) translateX(50px)";
                hiddenCard.style.zIndex = "1"; // Send the hidden card back
                firstCard.style.transform = "translateY(0) translateX(0)";
                firstCard.style.zIndex = "2"; // Bring the first card back in front
            }

            isHiddenCardVisible = false;
        }


// -----------------------Blogs---------------------------


