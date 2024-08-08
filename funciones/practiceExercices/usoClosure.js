function externa(){
    let texto =  "Ufc"
    function interna(){
        console.log(`Me gusta ver la ${texto}`)
    }
    return interna;
}

const a = externa();
a();