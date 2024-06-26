export const HeaderFirstName = "Pranav";
export const HeaderLastName = "Banker";
export const HeaderFancyName = false;
export const HeaderTitle = " ";
export const HeaderAddress = "Mumbai, Maharashtra, India";

// For Fancy Name Style

export const HeaderFirstLetterFN = HeaderFirstName.substring(0, 1).toUpperCase();
export const HeaderNoFirstLetterFN = HeaderFirstName.slice(1);
export const HeaderFirstLetterLN = HeaderLastName.substring(0, 1).toUpperCase();
export const HeaderNoFirstLetterLN = HeaderLastName.slice(1);

// For Website Title

export const HeaderFullName = (HeaderFirstLetterFN)+(HeaderNoFirstLetterFN).toLowerCase()+" "+(HeaderFirstLetterLN)+(HeaderNoFirstLetterLN).toLowerCase();
