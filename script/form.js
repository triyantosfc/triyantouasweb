function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("telephone").value;

    if (nama !== "" && email !== "" && phone !== "") {
        
        return true; 
    } else {
        alert('Lengkapi data di bawah untuk mengirim Pesan!');
        return false;
    }
}
