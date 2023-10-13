

class Elem{
    constructor(){
        this.divLetreHoz();
    }

    divLetreHoz(){
        const ASIDE = $('aside');
        let ugyanaz = true;
        while(ugyanaz){
            let rndSzam = Math.floor((Math.random() * 10) + 1);
            if($('.kontener'+rndSzam).length == 0){
                let txt = "<div class='kontener"+rndSzam+"'>";
                txt += "<p></p>";
                txt += "</div>";
                ASIDE.append(txt);

                $('.kontener'+rndSzam).on('click', function(){
                    $('aside .kontener'+rndSzam+' p').text('x');
                });
                
                
                ugyanaz = false;
            }
        

        }
       
       

    }
}

export default Elem;