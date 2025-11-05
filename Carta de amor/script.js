const messages = [
  "Oi, como você tá?",
  "Eu não sei se tô sendo precipitado em te mandar isso agora, não sei se é a melhor hora pra isso, mas também tô com muito medo de esperar demais e, quando perceber, você já não sentir mais nada por mim.",
  "Acontece que eu não quero te deixar escapar. Você é tão perfeita. É a mais bonita, a mais legal, a mais fofa. Não é questão de encontrar alguém como ou melhor que você, porque não tem ninguém como você. Você é especial e única. Meu coração bate mais forte e meus olhos brilham só de pensar em você, mas também dói quando lembro de todos os planos que a gente fez e que agora parecem mais distantes pela nossa situação.",
  "Seu gosto pra filmes, séries e músicas é ótimo, e eu sempre me interesso genuinamente pelo que você gosta. Eu sinto vontade de cuidar e te proteger de tudo. Eu quero te fazer feliz, quero te amar e ser amado por você. Quero te satisfazer de todas as formas possíveis, quero fazer as suas vontades.",
  "Quero ser seu namorado, seu marido, seu melhor amigo, seu parceiro, seu ombro direito. Quero construir uma vida e uma família com você. Eu nunca quero ver você entregando seu coração e o amor que tem pra outra pessoa. Não quero te perder, porque nunca tive tanta sorte na minha vida quanto no dia em que você apareceu. E eu nunca vi nenhum louco jogar um tesouro fora, não quero ser o primeiro.",
  "Eu não consigo pôr em palavras o quão feliz eu me sinto só de conversar com você, assistir ou jogar alguma coisa junto. Parecem coisas bobas, mas pra mim têm muitos momentos marcantes que foram simplesmente um dia normal nosso, uma conversa qualquer, um filme aleatório que a gente assistiu. Tipo o jogo de esconde-esconde do Roblox, o que é algo muito besta pra citar numa mensagem dessas, eu sei, mas eu nunca vou esquecer do dia em que você me chamou pra jogar e como esse foi o primeiro jogo que a gente jogou.",
  "Ou quando assistimos nosso primeiro filme da Barbie juntos, que talvez você nem lembre, mas foi A Magia de Aladus. Todo momento com você é muito importante pra mim. Tudo o que você sente e diz também é muito importante pra mim.",
  "Você me completa. É uma parte de mim. Me faz querer ser melhor. Tem muitas coisas que eu mudei por sua causa, você me deu ânimo pra buscar ser um homem melhor, é um pouco cansativo manter os estudos e o trabalho ao mesmo tempo, mas eu queria muito provar pra você e pra mim mesmo que eu podia melhorar por você.",
  "Queria poder comprar alguma coisa que você quisesse às vezes. Queria me sentir mais homem pra você, mais capaz de me sustentar, pra sentir que também podia cuidar de você. Queria que você visse que eu tava me esforçando pra te merecer, porque eu sei que não te mereço tanto assim. Você é muito pra mim.",
  "Mas é justamente por isso que não consigo deixar tudo do jeito que tá. Você é surreal, é minha salvação, e eu vou continuar lutando pra me tornar um homem digno de ficar ao seu lado.",
  "Eu tô com muito receio de te mandar isso, mas não consigo guardar. E é engraçado, porque foi você também quem me ensinou a importância de não guardar as coisas, seja o choro ou os pensamentos. Você sempre dizia tão naturalmente que chorava com coisas que eu considerava triviais e bobas demais pra chorar. E eu sentia que não podia chorar ou falar sobre o que sentia.",
  "Mas, se hoje eu não sou mais tão fechado, é muito graças a você. Você me ensinou muita coisa, e eu vou ser eternamente grato por tudo o que me ensinou.",
  "Eu amo o que a gente tem. Eu sei que nossa conexão é muito forte, eu sinto isso. Além de qualquer rótulo, seja como namorados ou amigos, eu sei que a nossa relação vai ser sempre especial, porque você é minha alma gêmea. Pelo menos é o que eu sinto. Tenho certeza que não foi à toa que você entrou na minha vida.",
  "Eu sei que você já negou, mas eu queria te pedir pra voltar a ser minha namorada. Eu te amo com todo o meu coração, pra sempre, independente do rumo que as coisas tomarem. Tenho certeza que o que tá no meu coração nunca vai mudar.",
  "E, se sua resposta for negativa, eu queria te pedir desculpas por insistir tanto nisso. Tô de peito aberto. Isso é tudo o que eu tô sentindo, e eu senti que devia tentar mais uma vez, porque cair sem lutar parece uma merda.",
  "Mas, dito tudo isso, eu também vou sempre te apoiar e querer o seu bem, independente de qualquer coisa. Quero continuar presente na sua vida. Eu te amo."
];

const envelope = document.getElementById("envelope");
const popup = document.getElementById("popup");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

envelope.addEventListener("click", () => {
  popup.style.display = "flex";
  envelope.style.display = "none";
  message.textContent = messages[index];
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index < messages.length) {
    message.textContent = messages[index];
    popup.scrollTop = 0;
  } else {
    popup.style.display = "none";
    envelope.style.display = "block";
    index = 0;
  }
});
