const lingkaran = {
    r: 5,
    phi: 3.14,
    luas(value){
        console.log(`luas lingkaran dengan r = ${this.r} adalah ${this.phi * this.r * this.r}`)
    },
    keliling(value){
        console.log(`keliling lingkaran dengan r = ${this.r} adalah ${2 * this.phi * this.r}`);
    }
}
lingkaran.luas();
lingkaran.keliling();