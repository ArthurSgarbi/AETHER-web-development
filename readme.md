# 🌌 AETHER — Ecossistema de Resiliência de Dados Terrestres

> **Fase 2: Desenvolvimento Web Avançado com JavaScript Dinâmico (Vanilla JS)**
> Projeto acadêmico desenvolvido para o curso de **Engenharia de Software** na **FIAP**.

🌐 **Acesse a aplicação em produção:** [GitHub Pages - AETHER](https://futurecall-fiap.github.io/AETHER-web-development/)

---

## 📝 Visão Geral do Projeto

O **AETHER** é uma solução robusta focada na garantia da integridade, retenção e trafegabilidade de dados críticos coletados em campo durante cenários de desastres ambientais extremos ou falhas catastróficas na infraestrutura tradicional de telecomunicações. Esta plataforma web serve como o hub de documentação, auditoria, simulação e interface interativa do ecossistema.

Este repositório documenta a evolução da interface front-end do projeto, agora potencializada com recursos dinâmicos utilizando **JavaScript Puro (Vanilla JS)**, sem dependência de frameworks ou bibliotecas externas, assegurando máxima performance, leveza e aderência às melhores práticas de Engenharia de Software.

---

## 🏗️ Estrutura de Conteúdo e Diretrizes do Projeto

De acordo com os requisitos estabelecidos para o projeto, a plataforma está dividida e estruturada de forma clara nas seguintes seções:

### Seção 1 — O Problema ⚠️
Em situações de eventos climáticos extremos (como inundações, deslizamentos de terra ou incêndios florestais), a infraestrutura de comunicação (redes celulares, cabos de fibra óptica e energia elétrica) é frequentemente danificada. Isso gera um "apagão de dados", impedindo que sensores de campo enviem métricas críticas e que equipes de resgate (como a Defesa Civil) recebam alertas em tempo real, resultando em tomadas de decisão lentas e perigosas.

### Seção 2 — Tecnologia Utilizada 🛠️
A camada front-end da plataforma foi desenvolvida utilizando tecnologias nativas da Web para garantir compatibilidade universal e carregamento instantâneo em dispositivos de baixa largura de banda:
- **HTML5**: Estruturação semântica avançada de todas as páginas de conteúdo e formulários.
- **CSS3 Avançado**: Folhas de estilo modulares com uso de propriedades personalizadas (*CSS Variables*) para controle dinâmico de layout, transições fluidas e responsividade completa.
- **JavaScript Moderno (ES6+)**: Lógica procedural nativa aplicada para manipulação do DOM (*Document Object Model*), gerenciamento de estados temporários e persistência de dados do navegador.
- **Web Storage API (LocalStorage)**: Utilizada para salvar o estado de configuração visual escolhido pelo usuário através das sessões de navegação.

### Seção 3 — Objetivos do Projeto 🎯
- **Garantir Resiliência**: Prover um mecanismo conceitual que retenha dados de sensores localmente em memória flash por até 72 horas em cenários offline.
- **Interface Descentralizada**: Disponibilizar painéis web leves que possam rodar em servidores locais de borda (*Edge Computing*).
- **Agilidade de Resposta**: Facilitar a triagem e o fluxo de dados operacionais para tomadas de decisão rápidas por parte das autoridades competentes.

### Seção 4 — Público-Alvo 👥
O ecossistema AETHER foi projetado especificamente para:
- **Órgãos de Segurança Pública e Resgate**: Defesa Civil, Corpo de Bombeiros e Forças de Ajuda Humanitária.
- **Gestores Públicos Municipais**: Prefeituras e secretarias de meio ambiente e urbanismo que demandam monitoramento meteorológico e geológico contínuo.
- **Operadores de Campo**: Equipes técnicas enviadas a áreas de risco isoladas para coleta de amostras e relatórios.

### Seção 5 — Benefícios Oferecidos 🏆
- **Redundância de Dados**: Eliminação do ponto único de falha de conectividade por meio de armazenamento assíncrono local.
- **Economia de Recursos**: Arquitetura ultra-leve que consome o mínimo de processamento de hardware, ideal para computadores de campo compactos ou microcontroladores.
- **Validação de Entrada**: Mitigação de falhas humanas e erros operacionais no preenchimento de relatórios críticos por meio de travas em nível de código.

### Seção 6 — Aplicação no Dia a Dia ⚙️
Na prática, um técnico da Defesa Civil em uma área sem sinal de internet devido a uma tempestade pode abrir o sistema AETHER localmente em seu notebook corporativo. Ele insere os dados de risco e preenche o relatório de campo. O JavaScript valida a integridade das informações e armazena os dados localmente. Quando a conexão retorna, o sistema realiza uma sincronização assíncrona automática com a central, garantindo que nenhum dado de vida ou morte seja perdido durante o apagão tecnológico.

---

## ⚡ Novas Implementações Dinâmicas (Módulo JavaScript)

Para esta fase, a plataforma evoluiu de um conjunto de páginas estáticas para uma aplicação web interativa através de quatro implementações principais em JavaScript puro:

1. **Gerenciador de Temas Globais (Troca de Cor de Fundo) 🎨**
   - Implementação de um painel alternador com **3 opções visuais completas**: Tema Padrão, Modo Escuro (*Dark Mode*) e Modo Alerta (Alto Contraste voltado para cenários de emergência).
   - O estado do tema é aplicado diretamente à raiz do documento (`data-theme`) e **salvo no `localStorage`**. Isso significa que a escolha do usuário se mantém ativa ao mudar de página ou ao fechar e abrir o navegador novamente.

2. **Slideshow Automatizado de Campo 🖼️**
   - Criação de uma galeria operacional contendo **3 imagens técnicas** integradas ao tema do projeto.
   - O carrossel funciona de forma autônoma por meio de temporizadores nativos (`setTimeout`), realizando transições de opacidade animadas via CSS para uma navegação visual fluida e agradável.

3. **Validação Inteligente de Formulários 🛑**
   - O formulário do simulador de alerta de campo possui uma camada protetora de JavaScript que intercepta o evento de envio (`onsubmit`).
   - A lógica limpa espaços vazios (`.trim()`) e realiza uma checagem rigorosa de todos os campos. Se houver dados faltantes, o envio padrão é cancelado (`event.preventDefault()`) e um alerta contextual avisa o operador, impedindo a transmissão de logs corrompidos ou em branco.

4. **Quiz Técnico Interativo (10 Questões) 🧠**
   - Renderização totalmente dinâmica das perguntas a partir de uma estrutura de matrizes e objetos Javascript.
   - O módulo processa as respostas escolher em tempo real, faz a verificação matemática dos acertos e exibe um **container de resultado final estilizado com feedback condicional** (verde para aprovação técnica excelente e vermelho para necessidade de revisão da documentação).

---

## 📁 Organização de Arquivos do Repositório

```text
AETHER-web-development/
├── arquivos-txt/          # Documentações textuais do projeto
├── imagens/               # Banco de imagens e ativos visuais da aplicação
├── index.html             # Página inicial (Apresentação do Ecossistema)
├── problema.html          # Detalhamento do cenário de risco ambiental
├── tecnologia.html        # Especificações de hardware e software
├── objetivos.html         # Metas do projeto e mapeamento de público
├── beneficios.html        # Vantagens práticas e organizacionais
├── logs.html              # Painel conceitual de auditoria de dados
├── interativo.html        # Hub Dinâmico (Slideshow, Quiz e Formulário)
├── style.css              # Arquivo unificado de estilos e variáveis CSS
└── script.js              # Código-fonte Javascript nativo (Vanilla JS)