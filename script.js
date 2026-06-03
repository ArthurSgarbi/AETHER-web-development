function changeTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('aether_theme', themeName);
}

window.onload = () => {
    const savedTheme = localStorage.getItem('aether_theme') || 'default';
    changeTheme(savedTheme);
    iniciarSlideshow();
    montarQuiz();
};

let slideIndex = 0;
function iniciarSlideshow() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].classList.add("active");
    setTimeout(iniciarSlideshow, 3500);
}

function validarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("⚠️ Acesso Negado: Todos os campos do formulário devem ser preenchidos para enviar o alerta.");
        return false;
    }

    alert(✅ Recebido, ${nome}! Seus dados foram validados e o alerta simulado foi enviado com sucesso.);
    document.getElementById('contatoForm').reset();
    return true;
}

const perguntasQuiz = [
    { q: "1. Qual é o principal objetivo do AETHER?", options: ["Streaming de Vídeo", "Resiliência de Dados Terrestres", "Jogos na Nuvem"], a: 1 },
    { q: "2. O que o sistema faz quando a internet cai?", options: ["Desliga imediatamente", "Começa a apagar dados", "Retém dados na memória flash local"], a: 2 },
    { q: "3. Qual é a capacidade de tempo retenção local sem internet?", options: ["2 horas", "24 horas", "Até 72 horas"], a: 2 },
    { q: "4. Qual tecnologia é usada para processar os dados no local de risco?", options: ["Edge Computing", "Mainframes", "Blockchain"], a: 0 },
    { q: "5. Como os alertas são enviados para equipes de resgate offline?", options: ["Sinal de Fumaça", "Frequências de Rádio UHF", "Bluetooth"], a: 1 },
    { q: "6. Qual linguagem baseia a programação dos microcontroladores?", options: ["C/C++", "HTML", "Python"], a: 0 },
    { q: "7. Quem é o público-alvo principal do AETHER?", options: ["Defesa Civil e Bombeiros", "Músicos", "Estudantes do Ensino Médio"], a: 0 },
    { q: "8. Como é feita a sincronização de dados quando a rede volta?", options: ["Manual via pendrive", "Sincronização assíncrona automática", "Via ligação telefônica"], a: 1 },
    { q: "9. O que causa as vulnerabilidades que o sistema resolve?", options: ["Extremos climáticos e desastres", "Falta de energia em computadores", "Erros de digitação"], a: 0 },
    { q: "10. Em cenário normal (com internet), o que o sistema envia à prefeitura?", options: ["Músicas", "Relatórios padrão meteorológicos", "Imagens de satélite em 8K"], a: 1 }
];

function montarQuiz() {
    const quizDiv = document.getElementById('quizQuestions');
    if (!quizDiv) return;

    perguntasQuiz.forEach((pergunta, index) => {
        let optionsHTML = '';
        pergunta.options.forEach((opcao, i) => {
            optionsHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${i}"> ${opcao}
                </label>
            `;
        });

        quizDiv.innerHTML += `
            <div class="quiz-question">
                <h4>${pergunta.q}</h4>
                <div class="quiz-options">${optionsHTML}</div>
            </div>
        `;
    });
}

function calcularQuiz() {
    let nota = 0;
    for (let i = 0; i < perguntasQuiz.length; i++) {
        let selecionado = document.querySelector(input[name="q${i}"]:checked);
        if (selecionado && parseInt(selecionado.value) === perguntasQuiz[i].a) {
            nota++;
        }
    }

    const resultDiv = document.getElementById('quizResult');
    resultDiv.style.display = 'block';

    if (nota >= 7) {
        resultDiv.style.backgroundColor = '#dcfce7';
        resultDiv.style.color = '#15803d';
        resultDiv.innerHTML = 🏆 Excelente! Sua pontuação: ${nota}/10. Você entende do sistema AETHER!;
    } else {
        resultDiv.style.backgroundColor = '#fee2e2';
        resultDiv.style.color = '#b91c1c';
        resultDiv.innerHTML = ⚠️ Atenção! Sua pontuação: ${nota}/10. Revise a documentação do projeto.;
    }
}