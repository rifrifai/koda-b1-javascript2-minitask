const lingkaran = {
    r: 10,
    phi: 3.14,
    luas(cb){
        const hasilLuas = this.phi * this.r * this.r;
        if(typeof cb === "function"){
            cb(hasilLuas, this.r);
        }
        return hasilLuas;
    },
    keliling(cb){
        const hasilKel = 2 * this.phi * this.r;
        if(typeof cb === "function"){
            cb(hasilKel, this.r)
        }
        return hasilKel;
    },

    ringkasan(){
        this.luas((hasilLuas, r) => {
            console.log(`luas lingkarang dengan r = ${r} adalah ${hasilLuas}`);
        }),
        this.keliling((hasilKel, r) => {
            console.log(`keliling lingkaran dengan r = ${r} adalah ${hasilKel}`);
        })
    }
}

lingkaran.ringkasan();
console.log(lingkaran.luas());







