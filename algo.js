function translatePigLatin(str) {
    let testReg = /[aeoui]/gi;
    let testRegConsonant = /[qwrtplkjhgfdszxcbnm]/gi;
    let count=0;

    if (str[0].match(testReg)) {
        return str += 'way';
    }
    for (let i = 0; i <= str.length; i++) {
        if (str[i].match(testRegConsonant)) {
            count++
             } else  {
            console.log(`wowel ${str[i]} find at`, count);
            return
        }

        let start = str.substr(count);
        let end = str.substr(0,count);
        console.log(end, count);

       return start + end  + 'ay';

    }
}

console.log(translatePigLatin('strping'));
//console.log(translatePigLatin('string'));
