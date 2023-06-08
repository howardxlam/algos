/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, 
or an empty array if a text contains no words.

Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

*/

function topThreeWords(text) {
    let words = text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || [];
    let wordCounts = {};

    for (let word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    let sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    return sortedWords.slice(0, 3);
}

/*
The doll caved of the doll from a rat at a cat with the monster
['the', 'a', 'doll']

The frog jumped among the cat for a toad at the doll into a doll
['the', 'a', 'doll']

A poster ran with a rat by the CD among a frog in a rat
['a', 'rat', 'ran']

A rat ran of a frog on a blanket in a doll with the CD
['a', 'cd', 'ran']

A blanket ate by the monster at a dresser from the frog at a jedi
['a', 'the', 'at']

A frog dove above the frog above a frog against a CD above a frog
['a', 'frog', 'above']

Dressers bolted at a poster into the CD into a frog by the frog
['a', 'into', 'the']

A poster exploded against a monster into a dresser into a jedi against a CD
['a', 'against', 'into']

Cats spoke in the jedi into the dresser by a frog to the jedi
['the', 'jedi', 'into']

Rats ate among a frog by the frog among a monster with the frog
['frog', 'among', 'a']

The toad yelled among the cat against a cat with the monster with a frog
['the', 'cat', 'a']

Jedis dove to the dresser for the poster against the doll by the jedi
['the', 'for', 'to']

Posters jumped against a jedi with a doll in a jedi into the CD
['a', 'jedi', 'with']

Dressers dove at a CD from the toad at a poster among the poster
['at', 'a', 'the']

Jedis ran against the doll with the frog against the jedi above a poster
['the', 'against', 'with']

The toad saw into the doll above a CD against a rat against the frog
['the', 'a', 'against']

Rats ate at the blanket from a CD by a dresser for a doll
['a', 'rats', 'at']

Rats ran for a poster in the poster in the poster by a cat
['poster', 'a', 'in']

Dolls saw at a dresser at the doll of a dresser to a cat
['a', 'at', 'dresser']

The jedi caved of the CD on the jedi from the frog for a blanket
['the', 'jedi', 'caved']

A doll spoke in a poster to a frog into a poster with a doll
['a', 'doll', 'poster']

Dolls yelled for a cat into a toad in the cat in the jedi
['a', 'cat', 'in']

The frog saw from a frog by a doll with a rat above a doll
['a', 'frog', 'doll']

CDs spoke on the CD at a monster from the CD at a frog
['the', 'cd', 'at']

Dressers jumped to a jedi on a poster at the CD against a monster
['a', 'poster', 'to']

Blankets ate above a doll into the cat from a doll in a poster
['a', 'doll', 'into']

Dolls jumped above the doll from the doll by a jedi with a rat
['the', 'doll', 'a']

Toads jumped above a CD to a jedi from the dresser among a poster
['a', 'jedi', 'above']

Cats dove at the poster of a frog with the jedi with a rat
['the', 'a', 'with']

A rat dove of the jedi against the poster in a toad for a monster
['a', 'the', 'dove']

Rats bolted for the poster of a blanket from a blanket against the monster
['the', 'a', 'blanket']

Jedis bolted above a frog into the cat by the toad for a blanket
['the', 'a', 'above']

The blanket ate in the monster with the toad with the frog to the frog
['the', 'with', 'frog']

Monsters jumped by a rat with the blanket with the CD against the frog
['the', 'with', 'by']

Cats exploded for the frog against the rat in the monster at a cat
['the', 'rat', 'for']

Dressers spoke of a jedi among a dresser at a monster at the cat
['a', 'at', 'among']

Monsters caved with a CD among the dresser into a CD with a cat
['a', 'with', 'cd']

Dolls yelled on the CD into a CD to a blanket in the toad
['the', 'cd', 'a']

A poster saw among a poster above a blanket on a rat by the dresser
['a', 'poster', 'saw']

Rats spoke against the CD against the blanket with the toad by the doll
['the', 'against', 'rats']

CDs bolted by a rat at a dresser by the CD to the monster
['by', 'a', 'the']

Toads yelled into a cat into the doll on the jedi against the CD
['the', 'into', 'toads']

Rats caved against a monster by the poster among the poster from the jedi
['the', 'poster', 'by']

CDs ate from a rat among the jedi above the frog for a jedi
['a', 'the', 'jedi']

A toad dove against the monster among the monster among a jedi for the poster
['the', 'a', 'monster']

The jedi caved among a jedi to a monster to the frog among the doll
['the', 'jedi', 'among']

Rats yelled for a dresser at the doll on a dresser of the dresser
['dresser', 'a', 'the']

A frog bolted against the CD of the monster on a doll in a jedi
['a', 'the', 'bolted']

The monster jumped among the CD of a cat in a doll among a blanket
['a', 'the', 'among']

CDs bolted to a doll with the CD of the monster at the frog
['the', 'cds', 'to']

*/