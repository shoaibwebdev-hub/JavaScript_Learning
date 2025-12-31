// Imediately Invoked Function Expression(IIFE)

(function chai (){
    // iife named
    console.log(`DB Connected`);
}) ();

((name) => {
    console.log(`DB Connected Two ${name}`);
})("shoaib")