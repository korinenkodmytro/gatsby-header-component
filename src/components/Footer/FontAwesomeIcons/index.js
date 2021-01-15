import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faPhoneAlt, faFacebookF, faInstagram, faLinkedin);

dom.watch();
