function openLink(nlink) {
    switch (nlink){
        case 'linkedin':
            window.open("https://www.linkedin.com/in/charlesrf/");
            break;
        case 'whatsapp':
            window.open("https://wa.me/5531991924329");
            break
        case 'instagram':
            window.open("https://www.instagram.com/charlesrf/");
            break
        case 'site':
            window.open("https://ge21gt.com.br");
            break
        case 'email':
            location.href ="mailto:charles.freitas@grupoge21.com"+"&subject=contato";
            break
        case 'telefone':
            location.href="tel:+5531991824329";
            break
    }


}c