import {phoneModal} from "./modules/phoneModal";
import {servicesModal} from "./modules/servicesModal";
import {documentModal} from "./modules/documents";
import {swiperBenefits, swiperServices} from "./modules/swiperSliders";
import {timer} from "./modules/timer";
import {smoothScroll} from "./modules/smoothScroll";
import {validation} from "./modules/formValidation";
import {sendForm} from "./modules/sendForm";
import {calculate} from "./modules/calculator";
import {reviews} from "./modules/reviews";

phoneModal();
swiperBenefits();
swiperServices();
servicesModal();
timer('11.07.2022');
documentModal();
smoothScroll();
validation();
calculate();
sendForm();
reviews();