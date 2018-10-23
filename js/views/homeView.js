let homeViewTemplate = /*html*/ `
<!-- Home -->
<div class="home">
    <section class="mainContainer home">
        <div class="container wrapper">
            <img class="animated fadeIn" src="images/abacusLogo.png" alt="Abacus logo">
            <h1 class="animated bounceIn">ABACUS</h1>
            <h4 class="animated bounceIn subtitle">A learning aid for elementary students</h4>
            <a class="animated fadeIn button getStartedButton">Get Started</a>
            <p class="animated bounceInUp has-text-grey-light font_small">Created by Team 2</p>
            <p class="animated bounceInUp has-text-grey-light font_small">CS-2450</p>
        </div>
    </section>

    <section class="modalWrapper">
        <div class="modal levelModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <h3 class="has-text-centered">CHOSE YOUR LEVEL</h3>
                    <div class="columns is-centered">
                        <img src="images/charmander.png" alt="Char-Char">
                        <div class="column level1 is-four-fifths">
                            <h4>Level 1</h4>
                            <p>Kindergarten & 1st. Grade</p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <img src="images/charmeleon.png" alt="Meeleooon">
                        <div class="column level2 is-four-fifths">
                            <h4>Level 2</h4>
                            <p>2nd. Grade & 3rd. Grade</p>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <img src="images/charizard.png" alt="Chaaaaar-i-zaaardd">
                        <div class="column level3 is-four-fifths">
                            <h4>Level 3</h4>
                            <p>4th. Grade & 5th. Grade</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </section>
</div>
`