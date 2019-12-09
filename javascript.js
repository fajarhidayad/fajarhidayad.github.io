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
    //untuk preview foto
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

//untuk cek huruf ato angka
    function checkLetter()
        {
            var validasiHuruf = /^[a-zA-Z ]+$/;
            var namaKota = document.getElementById("nama");
            
            if (namaKota.value.match(validasiHuruf)) {
                alert("Data Berhasil Di Input");
            } else {
                alert("Nama Wajib Huruf!");
                
            }
        }

//jika tipe file bukan image
function validasiEkstensi(){
    var inputFile = document.getElementById('inputFile');
    var pathFile = inputFile.value;
    var ekstensiOk = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!ekstensiOk.exec(pathFile)){
        alert('Silakan upload file yang memiliki ekstensi .jpeg/.jpg/.png/.gif');
        inputFile.value = '';
        return false;
    }
}

$("#nana").click(function(){
    var a = $("#namaL").val();
    var b = $("#lokasi").val();
    if (a == "" && b == "") {
        alert('Data Harus Diisi');
    }else{
        
    }
});