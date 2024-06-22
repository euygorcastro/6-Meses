/*const botoes = document.querySelectorAll(".botao");
        const fotos = document.querySelectorAll(".foto");
        const container = document.querySelector('.container');
        const scrollUpBtn = document.getElementById('scroll-up');
        const scrollDownBtn = document.getElementById('scroll-down');
        const audioElements = document.querySelectorAll('audio');

        botoes.forEach((botao) => {
            botao.addEventListener("click", () => {
                pauseAllAudios(); // Pausa todos os áudios ao clicar em um botão
                desselecionarBotao();
                desselecionarFoto();

                botao.classList.add("selecionado");
                const fotoId = botao.getAttribute("data-target");
                const fotoSelecionada = document.getElementById(fotoId);
                fotoSelecionada.classList.add("selecionado");
            });
        });

        scrollUpBtn.addEventListener('click', () => {
            container.scrollBy({
                top: -50,
                behavior: 'smooth'
            });
        });

        scrollDownBtn.addEventListener('click', () => {
            container.scrollBy({
                top: 50,
                behavior: 'smooth'
            });
        });

        function desselecionarBotao() {
            botoes.forEach((botao) => {
                botao.classList.remove("selecionado");
            });
        }

        function desselecionarFoto() {
            fotos.forEach((foto) => {
                foto.classList.remove("selecionado");
            });
        }

        // Função para pausar todos os áudios
        function pauseAllAudios() {
            audioElements.forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // Reinicia o áudio para o início
            });
        }*/

        const botoes = document.querySelectorAll(".botao");
        const fotos = document.querySelectorAll(".foto");
        const container = document.querySelector('.container');
        const scrollUpBtn = document.getElementById('scroll-up');
        const scrollDownBtn = document.getElementById('scroll-down');
        const audioElements = document.querySelectorAll('audio');

        botoes.forEach((botao) => {
            botao.addEventListener("click", () => {
                desselecionarBotao();
                desselecionarFoto();

                botao.classList.add("selecionado");
                const fotoId = botao.getAttribute("data-target");
                const fotoSelecionada = document.getElementById(fotoId);
                fotoSelecionada.classList.add("selecionado");

                // Pausa todos os áudios ao clicar em um novo botão
                pauseAllAudios();

                // Reproduz o áudio correspondente à foto selecionada
                const audioToPlay = fotoSelecionada.querySelector('audio');
                if (audioToPlay) {
                    audioToPlay.play();
                }
            });
        });

        scrollUpBtn.addEventListener('click', () => {
            container.scrollBy({
                top: -50,
                behavior: 'smooth'
            });
        });

        scrollDownBtn.addEventListener('click', () => {
            container.scrollBy({
                top: 50,
                behavior: 'smooth'
            });
        });

        function desselecionarBotao() {
            botoes.forEach((botao) => {
                botao.classList.remove("selecionado");
            });
        }

        function desselecionarFoto() {
            fotos.forEach((foto) => {
                foto.classList.remove("selecionado");
            });
        }

        // Função para pausar todos os áudios
        function pauseAllAudios() {
            audioElements.forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // Reinicia o áudio para o início
            });
        }

        // Adiciona um evento de play a cada elemento de áudio
        audioElements.forEach(audio => {
            audio.addEventListener('play', () => {
                pauseAllAudios();
                audio.play();
            });
        });