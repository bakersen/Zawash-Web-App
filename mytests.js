let ninRegex = /^C([A-Z]{1})([0-9A-Z])+$/

let nameRegex = /^([A-Z][a-z])|([A-Z][a-z]+\s[A-Z][a-z]+)|([A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+)$/

let numbRegex = /^U([A-E]{1})([A-Z]{1})[0-9]{3}[A-Z]$/

let zwashRegex = /^Zwash+[0-9]{3}$/

console.log(numbRegex.test('UAH234G'))

