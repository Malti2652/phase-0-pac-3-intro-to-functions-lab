const cantHear = "I can't hear you!";
const yesIndeed = "YES INDEED!"
const ilytoo = "I would love to!"


function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log (string.toUpperCase());
}

function logWhisper(string) {
  console.log (string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if(string == string.tolowerCase()) {
    return cantHear;
  }else if(string == string.toUpperCase()) {
    return yesIndeed;
  }else if(string == "let's have dinner together!") {
    return ilytoo;
  }
}