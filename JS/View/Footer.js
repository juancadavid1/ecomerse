export const footer = () => {
    document.querySelector(
        '[data-footer="footer"]'
    ).innerHTML = ` <section class="footer__card">
            <img src="assets/img/icons/Logo-alurageek.svg" alt="Logo Alurageek" class="footer__card-logo">
            <nav class="footer__card-nav">
                <ul class="footer__card-list">
                    <li class="footer__card-list-item"><a href="#">Quienes Somos</a></li>
                    <li class="footer__card-list-item"><a href="#">Política de Privacidad</a></li>
                    <li class="footer__card-list-item"><a href="#">Programa de Fidelidad</a></li>
                    <li class="footer__card-list-item"><a href="#">Nuestras Tiendas</a></li>
                    <li class="footer__card-list-item"><a href="#">Trabaja con nosotros</a></li>
                    <li class="footer__card-list-item"><a href="#">Anuncie aqui</a></li>
                </ul>
            </nav>
            <form action="" class="footer__card-form">
                <h2 class="footer__form-title">Hable con Nosotros</h2>

                <label for="name" class="footer__card-fom-label">Escriba su correo</label>
                <input type="text" name="nome" id="name" class="footer__card-fom-name" required maxlength="40"
                    data-input="name">
                <span class="input-message-error" data-error="name"></span>

                <label for="massage" class="hide">Escreva sua mensagem</label>
                <textarea name="mensagem" id="message" cols="30" rows="10" placeholder="Escriba su Mensage"
                    class="footer__card-form-message" required maxlength="120" data-input="message"></textarea>
                <span class="input-message-error" data-error="message"></span>
                <button class="footer__card-form-button button__secondary" data-send="footer">Enviar
                    mensage</button>
                <span class="input-message-send" data-message="send"></span>
            </form>
        </section>
        <div class="footer__maker">
            <p> Desarrollado por Juan camilo David | Full Stack Developer</p>
            <p>2022</p>
        </div>`;
};
