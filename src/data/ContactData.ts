import {faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter, faSquareEnvelope, faSquarePhone);



export const ContactData = [
    {
        ContactIcon: "fa-brands fa-square-github",
        ContactLink: "https://github.com/banker0404",
        ContactText: "github.com/banker0404"
    },
    // {
    //     ContactIcon: "fa-brands fa-square-gitlab",
    //     ContactLink: "/",
    //     ContactText: "gitlab.com/john-doe"
    // },
    {
        ContactIcon: "fa-brands fa-linkedin",
        ContactLink: "https://www.linkedin.com/in/pranav-banker/",
        ContactText: "linkedin.com/in/pranav-banker"
        // ContactText: "john-doe-123456789"
    },
    // {
    //     ContactIcon: "fa-brands fa-square-x-twitter",
    //     ContactLink: "/",
    //     ContactText: "x.com/john-doe"
    // },
    {
        ContactIcon: "fa-solid fa-square-envelope",
        ContactLink: "mailto:pranavmbanker@gmail.com",
        ContactText: "pranavmbanker@gmail.com"
    },
    {
        ContactIcon: "fa-solid fa-square-phone",
        ContactLink: "tel:+917700999273",
        ContactText: "+91 7700999273"
    },
]
