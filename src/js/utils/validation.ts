export function validateText(text: string) {
  return text !== "";
}

export function validateEmail(email: string) {
  const emailPattern = /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g;

  return emailPattern.test(email);
}
