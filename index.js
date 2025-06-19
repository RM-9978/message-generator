//function to take in a random mood

const userMood = (mood) => {
    if (mood === 'Happy' || mood === 'Upset' || mood === 'Apathetic' ) {
        return mood;
    } else {
        return 'something has gone wrong';
    }
}

//Function to decide the computer's mood
const compMood = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'Happy';
    } else if (randomNum === 2) {
        return 'Upset';
    } else if (randomNum === 3) {
        return 'Apathetic';
    }
}

/*const compMood = computerMood();
const userMood = usersMood();*/

//Responces
const sympathy = "I'm sorry you're feeling down. Hope you feel better soon!🥺";
const anger = "You're not the only having a hard time! Did you ever think it might suck for me too?😠";
const apathy = "Okay, but what does that have to do with me?😕";
const joy = "It really is a great day isn't it?☺️";
const annoyed = "Well I guess one of us is happy.😒"
const encourage = "Cheer up now! It's a great day!🤗"
const livid = "What's with your face?! You bored of me being upset?! 🤬"
const silence = "*An indifferent silence*";

//Function to describe computer responses
const responceMessage = () => {
    if (userMood() === 'Upset' && compMood() === 'Happy') {
        return sympathy;
    }
    if (userMood() === 'Upset' && compMood() === 'Upset') {
        return anger;
    }
    if (userMood() === 'Upset' && compMood() === 'Apathetic') {
        return apathy;
    }
    if (userMood() === 'Happy' && compMood() === 'Happy') {
        return joy;
    }
    if (userMood() === 'Happy' && compMood() === 'Upset') {
        return annoyed;
    }
    if (userMood() === 'Happy' && compMood() === 'Apathetic') {
        return apathy;
    }
    if (userMood() === 'Apathetic' && compMood() === 'Happy') {
        return encourage;
    }
     if (userMood() === 'Apathetic' && compMood() === 'Upset') {
        return livid;
    }
     if (userMood() === 'Apathetic' && compMood() === 'Apathetic') {
        return silence;
    }
}

userMood('Happy')
const message = responceMessage()
console.log(message);

//the function that puts it all together
/*const main = () => {
    console.log(
        `The user is feeling ${usersMood('Happy')}. The computer is feeling ${compMood}.
         So the computer responds with '${message}'`);
}*/
