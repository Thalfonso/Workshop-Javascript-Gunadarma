//Membuatobject mobil
var mobil = {
    nama : 'XPander',
    merek : 'Mitsubisi',
    tipeMobil : 'Mini Jeep',
    tahunDibuat : 2007,
    warna : 'putih',
    majuKencang : function () {
        console.log("Mobil ini melaju dengan kecepatan 300Km/h");
    },
    majuPelan : function () {
        console.log('Mobil ini melaju dengan kecepatan 10Km/h');
    },
    mundur : function () {
        console.log('Mobil ini melaju kebelakang');
    },
    stop : function () {
        console.log('Mobil ini berhenti');
    }
};

console.log("Nama Mobil : " + mobil.nama);
console.log("Nama Merek : " + mobil.merek);
console.log("Tipe Mobil : " + mobil.tipeMobil);
console.log("Tahun Dibuat : " + mobil.tahunDibuat);
console.log(mobil.majuKencang());
console.log(mobil.majuPelan());
console.log(mobil.mundur());
console.log(mobil.stop());