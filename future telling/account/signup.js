
let nameInput, ageInput, skillSelect;
let stateInput, contactInput;
let submitButton;
let message = "";

function setup() {
  createCanvas(500, 500);
  background(115, 165, 202);

  // Name
  nameInput = createInput();
  nameInput.position(width * 0.5, 157); 
  nameInput.size(200);

  // Age
  ageInput = createInput();
  ageInput.position(width * 0.5, 207);
  ageInput.size(200);

  //Gender
  genderInput = createSelect();
  genderInput.position(width * 0.5, 405);
  genderInput.option("Male");
  genderInput.option("Female");
  

  // Skill Level
  skillSelect = createSelect();
  skillSelect.position(width * 0.5, 260);
  skillSelect.option("Beginner");
  skillSelect.option("Intermediate");
  skillSelect.option("Advanced");

  // State
  stateInput = createInput();
  stateInput.position(width * 0.5, 307);
  stateInput.size(200);

  // Contact
  contactInput = createInput();
  contactInput.position(width * 0.5, 357);
  contactInput.size(200);

  // Submit Button
  submitButton = createButton("Create Account");
  submitButton.position(width*0.5, 450);
  submitButton.mousePressed(createAccount);
}





function draw() {
  background(115, 165, 202);
  textFont('EB Garamond');

  // Heading colour
  fill(255, 147, 62);
  textAlign(CENTER);
  textSize(25);
  textStyle(BOLD);
  text("CREATE AN ACCOUNT", 250, 50);
  

  // Label colour
  fill(0);
  textAlign(LEFT);
  textSize(16);
  textStyle(NORMAL);

  text("Name:", 80, 115);
  text("Age:", 80, 165);
  text("Skill Level:", 80, 215);
  text("State:", 80, 265);
  text("Contact:", 80, 315);
  text("Gender:", 80, 360);

  // Message colour
  fill(250);
  textAlign(CENTER);
  text(message, 250, 430);
}

function createAccount() {
  let name = nameInput.value();
  let age = ageInput.value();
  let skill = skillSelect.value();
  let state = stateInput.value();
  let contact = contactInput.value();
  let gender = genderInput.value();

    message = "Account created successfully! Welcome, " + name + "!";

nameInput.value("");
ageInput.value("");
skillSelect.value("");
stateInput.value("");
contactInput.value("");
genderInput.value("");

}
