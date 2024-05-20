# Thief Message Validator

![Thief Message Validator](https://imgur.com/GCTkUd9)


## Overview

The Thief Message Validator is a JavaScript utility that checks if a message can be constructed using the characters available in a given newspaper string. This can be useful for applications where you need to verify if a specific set of characters (message) can be created from another set (newspaper).

## Features

- **Count Characters**: Counts the occurrences of a specific character in a string.
- **Validate Message**: Validates whether a message can be created from characters in a given newspaper string, ensuring each character in the message is available in sufficient quantity in the newspaper.

## Functions

### `countChars(newspaperStr, char)`

Counts how many times a specific character appears in a given string.

#### Parameters

- `newspaperStr` (String): The string in which to count the character.
- `char` (String): The character to count in the string.

#### Returns

- (Number): The count of the specified character in the string.

### `generateThiefMessage(newspaper, message)`

Validates if the message can be generated from the characters available in the newspaper string.

#### Parameters

- `newspaper` (String): The string representing the newspaper text.
- `message` (String): The string representing the message to validate.

#### Returns

- (Boolean): `true` if the message can be generated from the newspaper characters, `false` otherwise.

## Usage

```javascript
let newspaper = "this is a sample newspaper text";
let message = " sample";

console.log("Example One");
console.log(generateThiefMessage(newspaper, message)); // true

message = "1";
console.log("Example Two");
console.log(generateThiefMessage(newspaper, message)); // false
```
