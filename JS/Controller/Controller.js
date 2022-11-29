import { footer } from "../View/Footer.js";
import { ValidForm } from "../Model/ValidForms.js";

footer();
const form = new ValidForm(document.querySelectorAll("[data-input]"));

form.check();

form.validateButton(
    document.querySelector('[data-send="footer"]'),
    "name",
    "message"
);
