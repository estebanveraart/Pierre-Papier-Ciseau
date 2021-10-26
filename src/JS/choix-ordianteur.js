
function choixOrdinateur(){

    function aléatoire(min,max){

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;

    }

    console.log(aléatoire(1,3));

}

export {choixOrdinateur}