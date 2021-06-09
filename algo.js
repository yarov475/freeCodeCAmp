const translatePigLatin = str => {
    const regExp = /[aeoui]/gi;
    const testRegConsonant = /[qwrtplkjhgfdszxcbnm]/;
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (!str[0].match(regExp)) {
            while (str[i].match(testRegConsonant)&&i<=str.length) {
                count++;console.log(count);
                if(i===str.length){
console.log(str)
                    return str+'ay'}
            }
            if (str[i].match(regExp)) return str.substr(count).concat(str.substr(0, count), "ay");
        }
        else {
            return `${str}way`;
        }
    }
};

console.log(translatePigLatin('glav'));
//console.log(translatePigLatin('string'));
