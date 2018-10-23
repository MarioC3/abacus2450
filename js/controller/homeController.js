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

let windowWidth = window.innerWidth;
if (windowWidth < 600) {
    let mobileModal = $(".notSupportedModal");
    mobileModal.addClass("is-active");
    let overAllContainer = $(".overAllContainer");
    overAllContainer.css('display', 'none');
}