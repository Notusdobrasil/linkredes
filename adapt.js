var ua = navigator.userAgent.toLowerCase();

var uMobile = '';

//Lista de dispositivos que acessar
uMobile = '';
uMobile += 'iphone;ipod;android';

//Separa os itens em arrays
v_uMobile = uMobile.split(';');

//verifica se vocÃª estÃ¡ acessando pelo celular
var isApple = false;
for (i=0;i<=v_uMobile.length;i++)
{
    if (ua.indexOf(v_uMobile[i]) != -1)
    {
    	isApple = true;
    }
}