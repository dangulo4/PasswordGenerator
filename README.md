# PasswordGenerator

The password application generates a random password based on user-selected criteria. 

The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters 

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

The application will validate the user input and ensure that at least one character type is selected.

Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

## User Story

AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security

## Business Context

For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

## Acceptance Criteria

GIVEN that a user needs a new, secure password

WHEN prompted for password criteria

THEN a password is generated