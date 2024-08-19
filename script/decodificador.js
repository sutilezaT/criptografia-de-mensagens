const resultConteiner = document.querySelector('.mensagem_saida');
const noResultConteiner = document.querySelector('.caixa_saida');

const matrixCryptoCaracteres = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
];

function ehTextoValido(string) {
    const regex = /^[a-z\s]+$/;
    return regex.test(string);
}

function criptografar () {

    const texto = document.getElementById('campo_texto_entrada').value;

    if (!ehTextoValido(texto)) {

        document.getElementById('msg_validacao').style.color = 'red'
        return 
    } 
    
    document.getElementById('msg_validacao').style.color = '#343A40';
    let textoCriptografado = ''
    
    const caracteresTexto = texto.split('')

    for (let i = 0; i < caracteresTexto.length; i++) {

        let caracterCriptografado = caracteresTexto[i]

        for (let chave of matrixCryptoCaracteres) {
            if (caracteresTexto[i] == chave[0])
                caracterCriptografado = chave[1];
        }

        textoCriptografado += caracterCriptografado;
    };
    exibirOutput(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById('campo_texto_entrada').value;
    if (!ehTextoValido(texto)) {
        document.getElementById('msg_validacao').style.color = 'red'
        return 
    } document.getElementById('msg_validacao').style.color = 'black';
    for (let chave of matrixCryptoCaracteres) {
            const regex = new RegExp(chave[1], 'g');
            texto = texto.replace(regex, chave[0]);
    };
   exibirOutput(texto);
}

function exibirOutput(output) {
    document.getElementById('output_vazio').style.display = 'none';
    document.getElementById('output_form').style.display = 'block';
    document.getElementById('campo_texto_saida').value = output;
}

function copiar() {
    let texto = document.getElementById('campo_texto_saida').value;
    navigator.clipboard.writeText(texto);
}