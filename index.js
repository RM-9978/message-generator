//function to take in a random mood

const userMood = (mood) => {
    if (mood === 'Happy' || mood === 'Upset' || mood === 'Apathetic' ) {
        return mood;
    } else {
        return 'something has gone wrong';
    }
}

//console.log(userMood('Happy')) // check;

//Function to decide the computer's mood
const computerMood = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'Happy';
    } else if (randomNum === 2) {
        return 'Upset';
    } else if (randomNum === 3) {
        return 'Apathetic';
    }
}

//console.log(computerMood); //check

//console.log(`User mood is ${userMood('Happy')} and Computer Mood is ${computerMood}`);

//Responces
const sympathy = "'I'm sorry you're feeling down. Hope you feel better soon!'🥺";
const anger = "'You're not the only having a hard time! Did you ever think it might suck for me too?'😠";
const apathy = "'Okay, but what does that have to do with me?'😕";
const joy = "'It really is a great day isn't it?☺️'";
const annoyed = "'Well I guess one of us is happy.'😒"
const encourage = "'Cheer up now! It's a great day!'🤗"
const livid = "'What's with your face?! You bored of me being upset?!' 🤬"
const silence = "*An indifferent silence*";

//Function to describe computer responses
const responceMessage = (userIs, computerIs) => {
    if (userIs === 'Upset' && computerIs === 'Happy') {
        return sympathy;
    }
    if (userIs === 'Upset' && computerIs === 'Upset') {
        return anger;
    }
    if (userIs === 'Upset' && computerIs === 'Apathetic') {
        return apathy;
    }
    if (userIs === 'Happy' && computerIs === 'Happy') {
        return joy;
    }
    if (userIs === 'Happy' && computerIs === 'Upset') {
        return annoyed;
    }
    if (userIs === 'Happy' && computerIs === 'Apathetic') {
        return apathy;
    }
    if (userIs === 'Apathetic' && computerIs === 'Happy') {
        return encourage;
    }
     if (userIs === 'Apathetic' && computerIs === 'Upset') {
        return livid;
    }
     if (userIs === 'Apathetic' && computerIs === 'Apathetic') {
        return silence;
    }
}

//the function that puts it all together
//Change userMood here
const main = () => {
    let userIsFeeling = userMood('Happy'); 
    let computerIsFeeling = computerMood(); 
    console.log (
       `The user is feeling ${userIsFeeling}. 
        The computer is feeling ${computerIsFeeling}.
        Therefore, the computer responds with
        ${responceMessage(userIsFeeling, computerIsFeeling)}`);
}


//Implement
main();