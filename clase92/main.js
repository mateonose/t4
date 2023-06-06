// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas = new fabric.Canvas('myCanvas');

//Define el ancho inicial y el alto del cloque de imágenes 
block_image_width = 30;
block_image_height = 30;

//Define el inicio de las coordenadas  y Y del jugador 
plyer_x = 10;
plyer_y = 10;

// Define una variable llamada player_object para almacenar la imagen del jugador
var player_object = "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 
function player_update()
{
    fabric.Image.fromURL("player.png", function (Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function (Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_tecla_presionada);
function my_tecla_presionada(e)
{
     teclapresionada = e.keyCode;
     console.log(teclapresionada);
     if (e.shiftKey == true && teclapresionada == '80')
     {
        console.log("Se presionaron Shift y P juntas");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
     }

    
     if (e.shiftKey == true && teclapresionada == '77')
     {
        console.log("Se presionaron Shift y M juntas");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
     }

     if (teclapresionada == '38')
     {
        arriba();
        console.log("tecla Arriba");
     }

     if (teclapresionada == '40')
     {
        abajo();
        console.log("tecla Abajo");
     }

     if (teclapresionada == '37') 
     {
        izquierda();
        console.log("tecla Izquierda");
     }

     if (teclapresionada == '39')
     {
        derecha();
        console.log("tecla Derecha");
     }

     if (teclapresionada == '87')
     {
        new_image('wall.jpg');
        console.log("tecla W");
     }

     if (teclapresionada =='71')
     {
        new_image('ground.png');
        console.log("tecla G");
     }

     if (teclapresionada == '68')
     {
        new_image('dark_green.png');
        console.log("tecla D")
     }

     if (teclapresionada == '76')
     {
        new_image('light_green.png');
        console.log("tecla L")
     }

     if (teclapresionada == '84')
     {
        new_image('trunk.jpg');
        console.log("tecla T")
     }

     if (teclapresionada == '82')
     {
        new_image('cloud.jpg');
        console.log("tecla R");
     }

     if (teclapresionada == '89')
     {
        new_image('yellow_wall.png');
        console.log("tecla Y");
     }

     if (teclapresionada == '85')
     {
        new_image('unique.png');
        console.log("tecla U")
     }

     if (teclapresionada == '67')
     {
        new_image('roof.jpg');
        console.log("tecla C")
     }
}
