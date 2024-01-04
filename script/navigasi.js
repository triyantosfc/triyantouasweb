document.addEventListener('DOMContentLoaded', function () {
    // Temukan semua elemen tautan berdasarkan kelas
    var myLinks = document.querySelectorAll('.myLink');

    // Tambahkan event listener pada setiap tautan
    myLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Hapus kelas 'clicked' dari semua tautan
            myLinks.forEach(function (otherLink) {
                otherLink.classList.remove('clicked');
            });

            // Tambahkan kelas 'clicked' ke tautan yang diklik
            link.classList.add('clicked');
        });
    });
});
