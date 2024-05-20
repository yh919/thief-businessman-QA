function countChars(newspaperStr, char) {
    // Split the string into an array of characters, filter the array to only include the specified character,
    // and then get the length of the filtered array, which represents the count of the specified character.

    return newspaperStr.split("").filter((c) => c === char).length;
  }
  function generateTheifMessage(newspaper, message) {
    let msgChars = new Array();

    for (let char of message) {
      if (msgChars.includes(char)) return false; // if char is duplicated

      msgChars.push(char); // add char to array if not duplicated
    }

    for (let char of msgChars) {
      // Check if the count of the character in the message is greater than in the newspaper

      if (countChars(message, char) > countChars(newspaper, char)) return false; // Return false if not enough characters in newspaper
    }

    return true;
  }

  let newspaper = "this is a sample newspaper text";

  let message = " sample";
  console.log("Example One");
  console.log(generateTheifMessage(newspaper, message)); // true

  message = "1";
  console.log("Example Two");
  console.log(generateTheifMessage(newspaper, message)); // false
