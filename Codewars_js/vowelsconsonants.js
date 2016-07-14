function getCount(words) {
    var result = {vowels: 0, consonants: 0};
     
    if (typeof words !== 'string' || typeof words === null || words === '' || words === undefined){
        
        return result;
    
    }
    
    words = words.replace( /[^a-zA-Z]/, "");
    words = words.trim();

    if (words.match(/[bcdfghjklmnpqrstvwxyz]/gi) === null && words.match(/[aeiou]/gi) === null){
    
        console.log(words);
        return result;
    
    } else if (words.match(/[aeiou]/gi) === null) {

        result.vowels = 0;
        result.consonants = words.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; 
        console.log(words);
        return result;

    } else if (words.match(/[bcdfghjklmnpqrstvwxyz]/gi) === null ) {

        result.vowels = words.match(/[aeiou]/gi).length;
        result.consonants = 0;
        console.log(words);
        return result;

    } else {

        result.vowels = words.match(/[aeiou]/gi).length;
        result.consonants = words.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; 
        console.log(words);
        return result;

    }
}