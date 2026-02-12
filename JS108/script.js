const student={
    name:"Shardha",
    age:23,
    eng:98,
    math:97,
    physics:99,
    getAvg() {
        let avg=(this.eng+this.math+this.physics)/3;
        console.log(avg);
    }
}