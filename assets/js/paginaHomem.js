 
 const cards = document.querySelectorAll(".cardFotos");

cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        let cardSelecionado = document.querySelector(".cardFotos.active");
        card.classList.toggle("active");
        cardSelecionado.classList.remove("active");
    })
})


function action() {
    let titulo = document.getElementById("titulo")
    const conteudo = document.getElementById("conteudo")
    if (titulo.innerHTML == "História Vale do Douro") {

        titulo.innerHTML = "Importância Turística Vale do Douro"
        conteudo.innerHTML = "O Vale do Douro é um dos destinos turísticos mais emblemáticos de Portugal, atraindo visitantes pela beleza de suas paisagens e riqueza cultural. Reconhecido como Patrimônio Mundial pela UNESCO, oferece experiências únicas, como passeios de barco pelo rio, visitas a vinícolas históricas e degustação de vinhos premiados. A gastronomia típica e o charme das aldeias locais complementam a experiência. O turismo no Douro promove a economia regional e preserva tradições centenárias."
  
    } else {
        titulo.innerHTML = "História Vale do Douro"
        conteudo.innerHTML = "A Primeira região do mundo a ser demarcada para produção de vinho foi o Vale do Rio Douro em Portugal que é hoje Patrimônio Mundial. Sua paisagem é invulgar e fantástica, bem como sua história… O inglês Joseph James Forrester desvendou minuciosamente a região. O Douro era a paixão que mais energia lhe consumia. Para o estudar até ao mais ínfimo recanto mandou construir um barco rabelo de luxo, com dormitório, restaurante e garrafeira, pagava altos salários para ter os marinheiros mais experientes e obrigava-os a vestir farda. Nas margens do rio, ou nas aldeias miseráveis da região, tornou-se uma lenda. Subiu e desceu montes e vales."
        
    }
    
}
function action2() {
    let titulo = document.getElementById("titulo2")
    const conteudo = document.getElementById("conteudo2")
    if (titulo.innerHTML == "História Ilha da Madeira") {

        titulo.innerHTML = "Importância Turística Ilha da Madeira"
        conteudo.innerHTML = "A Madeira é um dos principais destinos turísticos de Portugal, conhecida como o Jardim Flutuante, devido à sua biodiversidade e paisagens deslumbrantes. A ilha atrai visitantes com suas levadas (canais de irrigação), trilhas, praias de lava e jardins botânicos. O clima ameno durante todo o ano e a hospitalidade dos habitantes tornam-na ideal para o turismo. Festividades como o Réveillon, com fogos de artifício grandiosos, são mundialmente famosas. "
  
    } else {
        titulo.innerHTML = "História Ilha da Madeira"
        conteudo.innerHTML = "A Ilha da Madeira, descoberta por navegadores portugueses em 1419, foi uma das primeiras colônias ultramarinas de Portugal. Inicialmente desabitada, tornou-se um importante centro de produção de açúcar e vinho, fundamentais para a economia do país durante séculos. Sua localização estratégica no Atlântico fez dela um ponto de paragem para navios em rotas comerciais. A ilha enfrentou ataques de piratas e desafios naturais, mas prosperou com o comércio e a agricultura."
        
    }
    
}
function action3() {
    let titulo = document.getElementById("titulo3")
    const conteudo = document.getElementById("conteudo3")
    if (titulo.innerHTML == "História da Ria Formosa") {

        titulo.innerHTML = "Importância Turística da Ria Formosa"
        conteudo.innerHTML = "A Ria Formosa é um destino turístico de destaque, reconhecida pela sua biodiversidade e beleza natural. Parte de um Parque Natural, a área é um refúgio para aves migratórias e espécies raras, atraindo amantes da natureza e observadores de aves. Suas ilhas paradisíacas, como a Ilha de Faro e a Ilha da Culatra, oferecem praias tranquilas e águas cristalinas. Atividades como passeios de barco, pesca e degustação de frutos do mar são populares entre os visitantes."
  
    } else {
        titulo.innerHTML = "História da Ria Formosa"
        conteudo.innerHTML = "A Ria Formosa, localizada no sul de Portugal, tem uma história intimamente ligada às atividades marítimas e pesqueiras da região do Algarve. Formada por um sistema lagunar dinâmico, suas ilhas e canais mudam com o tempo devido à ação das marés. Desde tempos antigos, foi habitada por comunidades que dependiam da pesca, produção de sal e agricultura. Durante a ocupação árabe, a região floresceu com inovações na irrigação e no comércio marítimo. "
        
    }
    
}



 
    
