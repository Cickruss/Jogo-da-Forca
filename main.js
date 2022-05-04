var dc = ["batman", 'superman', 'wonderwoman','arlequina','joker'];
var i = Math.floor(Math.random()*5);
var palavra = dc[i], q = dc[i].length;
var p = '';
var x, s;
var derrotas = 0, boneco = '';


alert('Bem vindo ao jogo da forca, podemos iniciar?')
alert('O tema é personagens da DC comics')

for(var y = 0; y < q; y++){
    p += '?'
}
alert(
    'sua palavra sorteada foi:  \n' 
    +p
    )
    
    console.log(dc[i]);
    console.log(dc[i].length);

    
    while (derrotas < 6) {
        
        x = prompt(p + 
        '\n Digite sua letra palpite: \n'
        + boneco)
        
        s = palavra.indexOf(x)
        console.log(s);
        
    if (s >= 0) {

    }
    else{
        switch (derrotas) {
            case 0:
                boneco = 'O'
                derrotas++
                break;
            case 1:
                boneco = 'O\n | '
                derrotas++
                break;
            case 2:
                boneco = 'O\n(|'
                derrotas++
                break;
            case 3:
                boneco = 'O\n(|)'
                derrotas++
                break;
            case 4:
                boneco = 'O\n(|)\n('
                derrotas++
                break;
            case 5:
                boneco = 'O\n(|)\n( )'                    
                derrotas++
                break;
        }

    }
        
}

alert(boneco + '\n \n Game Over')

