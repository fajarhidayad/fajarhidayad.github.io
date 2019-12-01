    const modal = document.querySelector('#my-modal');
    const modalBtn = document.querySelector('#modal-btn');
    const closeBtn = document.querySelector('.close');

    // Events
    modalBtn.addEventListener('click', bukaModal);
    closeBtn.addEventListener('click', tutupModal);
    window.addEventListener('click', luarModal);

    // Open
    function bukaModal() {
    modal.style.display = 'block';
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#image_upload_preview').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#inputFile").change(function () {
        readURL(this);
    });

    // Close
    function tutupModal() {
    modal.style.display = 'none';
    }

    // Close If Outside Click
    function luarModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    }