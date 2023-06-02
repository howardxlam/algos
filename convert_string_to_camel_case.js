/*Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/



function toCamelCase(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "-" || str[i] == "_") {
            newStr.push(str[i + 1].toUpperCase());
            i++;
        } else {
            newStr.push(str[i]);
        }
    }
    return newStr.join("");
}


function toCamelCase2(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));