function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

 let regex = /^pet_[a-zA-Z0-9]+$/;

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
 if (regex.test(input)) {
   result = "Valid Syntax";
   document.getElementById("result").className = "valid emoji";
 } else {
   result = "Invalid Syntax";
   document.getElementById("result").className = "invalid emoji";
 }   
            document.getElementById('result').innerText = result;
}



