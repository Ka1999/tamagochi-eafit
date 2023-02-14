window.onload = function() {

        var hambre = 100; 
        var relojHambre = setInterval(agotarHambre, 1000); 
        var bano = 100; 
        var relojBano = setInterval(agotarBano, 900); 
        var diversion = 100; 
        var relojDiversion = setInterval(agotarDiversion, 800); 
        var perdidas = 0; 
        

        document.getElementById("BtnHambre").onclick = llenarHambre;
        document.getElementById("BtnBano").onclick = llenarBano;
        document.getElementById("BtnDiversion").onclick = llenarDiversion;
       
        
      
        function verificarFinDelJuego(){
            if(hambre==0&&bano==0&&diversion==0&&perdidas==0){
                alert("Has perdido!");
                perdidas++;
                imagenTamagotchi();

            }
            else{
                imagenTamagotchi();
            }
        }
        

        
        function imagenTamagotchi(){
            if(hambre==0&&bano==0&&diversion==0){
                document.getElementById("tamagotchi").src = "./img/muerto.png";
            }else{
                document.getElementById("tamagotchi").src = "./img/dos-ojos.png";
            }
        }
        
        function llenarHambre(){
            if(hambre<=99&&hambre!=0){
                hambre += 2;
            }
            else if(hambre==0){
                hambre+=0;
            }
        }

        function llenarBano(){
            if(bano<=99&&bano!=0){
                bano += 2;
            }
            else if(bano==0){
                bano+=0;
            }
        }
        

        function llenarDiversion(){
            if(diversion<=99&&bano!=0){
                diversion += 2;
            }
            else if(diversion==0){
                diversion+=0;
            }
        }

        function agotarHambre(){
            if(hambre == 0){
                clearInterval(relojHambre);
                alert("¡Tu mascota tiene hambre!");
                verificarFinDelJuego();
            }
            else{
                hambre--;
                document.getElementById("BarraHambre").value = hambre;
            }
        }
        
        function agotarBano(){
            if(bano == 0){
                clearInterval(relojBano);
                alert("¡Tu mascota necesita ir al baño!");
                verificarFinDelJuego();
            }
            else{
                bano--;
                document.getElementById("BarraBano").value = bano;					
            }
        }
        
        function agotarDiversion(){
            if(diversion == 0){
                clearInterval(relojDiversion);
                alert("¡Tu mascota neceista Jugar!");
                verificarFinDelJuego();
            }
            else{
                diversion--;
                document.getElementById("BarraDiversion").value = diversion;
            }
        }
    }