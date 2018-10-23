let app = $("#app")[0];
app.innerHTML = homeViewTemplate;

//Modal
let getStartedButton = $(".getStartedButton");
getStartedButton.click(()=> {
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
    modalClose.click(()=> {
        closeModal();
    })
    modalBackground.click(()=> {
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

//level1 choose
let level1 = $(".level1");
level1.click(()=> {
    $.get("./js/views/level1View.html", (data)=> {
        let home = $(".home");
        home.addClass('animated fadeOut');
        setTimeout(()=> {
            app.innerHTML = data;
        }, 500);        
    });
})

let level2 = $(".level2");
level2.click(()=> {
    $.get("./js/views/level2View.html", (data)=> {
        let home = $(".home");
        home.addClass('animated fadeOut');
        setTimeout(()=> {
            app.innerHTML = data;
        }, 500);        
    });
})

let level3 = $(".level3");
level3.click(()=> {
    $.get("./js/views/level3View.html", (data)=> {
        let home = $(".home");
        home.addClass('animated fadeOut');
        setTimeout(()=> {
            app.innerHTML = data;
        }, 500);        
    });
})
