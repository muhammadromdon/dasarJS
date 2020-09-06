var tanya = true

while (tanya) {

    var p = prompt('Silahkan pilih : Gajah, Semut, Orang')

    var com = Math.random()

    if (com < 0.34) {
        com = 'Gajah'
    } else if (com >= 0.34 && com < 0.67) {
        com = 'Orang'
    } else {
        com = 'Semut'
    }

    var hasil = ''

    if (p == com) {
        hasil = 'SERI !'
    } else if (p == 'Gajah') {
        hasil = (comp == 'Orang') ? 'MENANG !' : 'KALAH !'
    } else if (p == 'Orang') {
        hasil = (com == 'Gajah') ? 'KALAH !' : 'MENANG !'
    } else if (p == 'Semut') {
        hasil = (com == 'Orang') ? 'KALAH !' : 'MENANG !'
    } else {
        hasil = 'Anda memasukkan pilihan yang salah!'
    }

    alert('Kamu memilih' + p + ' dan komputer memilih ' + com + '\n maka hasilnya kamu ' + hasil)

    tanya = confirm('Main lagi ?')
}

alert('Terimakasih sudah bermain!')