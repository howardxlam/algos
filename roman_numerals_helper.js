/*
Write two functions that convert a roman numeral to and from an integer 
value.Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately 
starting with the left most digit and skipping any digit with a value 
of zero.In Roman numerals 1990 is rendered: 1000 = M, 900 = CM, 90 = XC;
resulting in MCMXC. 2008 is written as 2000=MM, 8 = VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Input range: 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's 
four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
400 -> "CD"
90 -> "XC"
40 -> "XL"
1 -> "I"

from roman:
"MM" -> 2000
"MDCLXVI" -> 1666
"M" -> 1000
"CD" -> 400
"XC" -> 90
"XL" -> 40
"I" -> 1
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000
*/


function fromRoman(str) {
    let fromResult = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "M" && str[i - 1] != "C") {
            fromResult += 1000;
        } else if (str[i] == "M" && str[i - 1] == "C") {
            fromResult += 900;
        }

        if (str[i] == "C" && str[i - 1] != "X" && str[i + 1] != "M" && str[i + 1] != "D") {
            fromResult += 100;
        } else if (str[i] == "C" && str[i - 1] == "X") {
            fromResult += 90;
        }
        if (str[i] == "X" && str[i + 1] != "C" && str[i + 1] != "L" && str[i - 1] != "I") {
            fromResult += 10;
        }

        if (str[i] == "X" && str[i + 1] == "L") {
            fromResult += 40;
        }
        if (str[i] == "I" && str[i + 1] == "X") {
            fromResult += 9;
        }

        if (str[i] == "V" && str[i - 1] != "I") {
            fromResult += 5;
        } else if (str[i] == "V" && str[i - 1] == "I") {
            fromResult += 4;
        }
        if (str[i] == "I" && str[i + 1] != "V" && str[i + 1] != "X") {
            fromResult += 1;
        }

        if (str[i] == "L" && str[i - 1] != "X") {
            fromResult += 50;
        }
        if (str[i] == "D" && str[i - 1] != "C") {
            fromResult += 500;
        } else if (str[i] == "D" && str[i - 1] == "C") {
            fromResult += 400;
        }
    }

    return fromResult;
}

console.log(fromRoman("MMMCDXLII"));


function toRoman(num) {
    let toResult = [];

    if (num >= 1000) {
        let mResult = Math.floor(num / 1000);
        num -= (mResult * 1000);
        for (var i = 0; i < mResult; i++) {
            toResult.push("M");
        }
    }
    if (num >= 900) {
        num -= 900;
        toResult.push("CM");
    }
    if (num >= 500) {
        num -= 500;
        toResult.push("D");
    }
    if (num >= 400) {
        num -= 400;
        toResult.push("CD");
    }
    let cResult = Math.floor(num / 100);
    num -= (cResult * 100);
    for (var i = 0; i < cResult; i++) {
        toResult.push("C");
    }
    if (num >= 90) {
        num -= 90;
        toResult.push("XC")
    }
    if (num >= 50) {
        num -= 50;
        toResult.push("L")
    }
    if (num >= 40) {
        num -= 40;
        toResult.push("XL");
    }
    let xResult = Math.floor(num / 10);
    num -= (xResult * 10);
    for (var i = 0; i < xResult; i++) {
        toResult.push("X");
    }
    if (num >= 9) {
        num -= 9;
        toResult.push("IX");
    }
    if (num >= 5) {
        num -= 5;
        toResult.push("V");
    }
    if (num >= 4) {
        num -= 4;
        toResult.push("IV");
    }
    for (var i = 0; i < num; i++) {
        toResult.push("I");
    }

    return toResult.join("");
}

console.log(toRoman(2222));

/*
class RomanNumerals {
    static toRoman(num) {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let result = '';

        for (const numeral of romanNumerals) {
            while (num >= numeral.value) {
                result += numeral.numeral;
                num -= numeral.value;
            }
        }

        return result;
    }

    static fromRoman(str) {
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };

        let result = 0;

        for (let i = 0; i < str.length; i++) {
            const currentNumeral = romanNumerals[str[i]];
            const nextNumeral = romanNumerals[str[i + 1]];

            if (nextNumeral && nextNumeral > currentNumeral) {
                result += nextNumeral - currentNumeral;
                i++;
            } else {
                result += currentNumeral;
            }
        }

        return result;
    }
}


*/