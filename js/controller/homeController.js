//Modal
let getStartedButton = $(".getStartedButton");
getStartedButton.click(()=> {
    //open modal
    let modal = $(".modal");
    let modalContent = $('.modal-content');
    modal.addClass("is-active animated fadeIn");
    modalContent.addClass("animated bounceInUp");

    //close modal
    let closeModal = () => {
        console.log('works')
        modal.removeClass("is-active");   
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