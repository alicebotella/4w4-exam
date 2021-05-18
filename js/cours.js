(function(){
    let web = document.article.innerHTML = "web";
    let jeu = document.article.innerHTML = "jeu";
    let imagerie = document.article.innerHTML = "imagerie";
    let conception = document.article.innerHTML = "conception";
    let specifique = document.article.innerHTML = "specifique";

    web.addEventListener("click", webanim());
    jeu.addEventListener("click", jeuanim());
    imagerie.addEventListener("click", imganim());
    conception.addEventListener("click", concepanim());
    specifique.addEventListener("click", specanim());


    //test 1 - ajout bg css
    webanim(); {
        web.style.backgroundColor = 'palegreen';
    }

    jeuanim(); {
        web.style.backgroundColor = 'paleturquoise';
    }

    imganim(); {
        web.style.backgroundColor = 'palevioletred';
    }

    concepanim(); {
        web.style.backgroundColor = 'peachpuff';
    }

    specanim(); {
        web.style.backgroundColor = 'pink';
    }




    //test 2
    document.getElementById("web").innerHTML = document.style.backgroundColor = 'pink';

})()