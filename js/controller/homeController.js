let loadHome = () => {
    let app = $("#app");
    $(app).load('./views/homeView.html')
}
loadHome();

//Modal
$(document).on('click', '.getStartedButton', ()=> {
    console.log('working')
    //open modal
    let levelModal = $(".levelModal");
    let modalContent = $('.modal-content');
    levelModal.addClass("is-active animated fadeIn");
    modalContent.addClass("animated bounceInUp");

    //close modal
    let closeModal = () => {
        console.log('works')
        levelModal.removeClass("is-active");   
    }
    let modalClose = $(".modal-close");
    let modalBackground = $(".modal-background")
    $(document).on('click', '.modal-close', ()=> {
        closeModal();
    })
    $(document).on('click', '.modal-background', ()=> {
        closeModal();
    })
})

//Mobile not compatible
let windowWidth = window.innerWidth;
if (windowWidth < 600) {
    let mobileModal = $(".notSupportedModal");
    mobileModal.addClass("is-active");
    let overAllContainer = $(".overAllContainer");
    overAllContainer.css('display', 'none');
}

// Router
$(()=> {
    let levels = Array.from(document.getElementsByClassName('level'));

    $(document).on('click', '.level', (e)=> {
        let id = e.currentTarget.id;
        console.log(id)
        history.pushState({id}, null, `./${id}`);
        showContent(id);
    })

    let showContent = (id) => {
        if (id === 'level1'){
            let home = $(".home");
            home.addClass('animated fadeOut');
            setTimeout(()=> {
                $(app).load("./views/level1View.html");
            }, 500);
        }
        if (id === 'level2'){
            let home = $(".home");
            home.addClass('animated fadeOut');
            setTimeout(()=> {
                $(app).load("./views/level2View.html");
            }, 500);
        }
        if (id === 'level3'){
            let home = $(".home");
            home.addClass('animated fadeOut');
            setTimeout(()=> {
                $(app).load("./views/level3View.html");
            }, 500);
        }

        if (id === null) {
            loadHome();
        }
    }

    window.addEventListener('popstate', e=> {
        showContent(e.state.id);
    })

    history.replaceState({id: null}, null, `./`)
});





