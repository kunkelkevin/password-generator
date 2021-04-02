# Password Generator

Used existing code as a framework to add the necessary javascript to create a random password generator utilizing user input.

The website will ask the length of the password.  A check is made to make sure the length is between 8 and 120, and if not will ask again until valid answer is provided.

It will then go through four prompts to get user input on the desired type of characters in the password (lowercase, uppercase, numeric, special).  A check is made to make sure at least one character type is chosen.  If no types were chosen, it will loop back to start the process over.

There is one final validation that displays all the chosen input from the user and confirms that it is the desired criteria.  Once confirmed, the password is diplayed in the text box.

There is logic added to ensure that at least one character from each chosen character type is included in the generated password.

The website is [https://kunkelkevin.github.io/password-generator/](https://kunkelkevin.github.io/password-generator/)

Screenshot showing a generated password (ten characters using all types):
![Desktop screenshot](assets/img/screenshot-password.png "Desktop screenshot")

Screenshot of final validation prompt:
![Mobile screenshot](assets/img/screenshot-validation.png "Mobile screenshot")
