/**
 * Description:
 * Transform the following code into Prototype style
 */

 // Parent class
class Question {
  constructor(data) {
    if (new.target === Question) {
      throw new Error('You can not instantiate this class!!');
    }

    this.text = data.text;
    this.type = data.type;
  }

  getText() {
    return this.text;
  }
}

// Child class
class QuestionMultipleChoice extends Question {
  constructor (data) {
    super(data);

    this.options = data.options;
  }

  getOptions() {
    return this.options;
  }

  showQuestion() {
    console.log(this.getText());
    console.log(this.options);
  }
}

// Factory class
class QuestionFactory {
  // method to create the specific question according to the question type
  static createQuestion(question) {
    if (question.type === 'MULTIPLE_CHOICE') {
      return new QuestionMultipleChoice(question);
    }

    throw new Error(`No question type defined for ${question.type}`);
  }
}

const question1 = QuestionFactory.createQuestion({
  text: 'What is the name of your instructor?',
  type: 'MULTIPLE_CHOICE',
  options: ['Javier', 'Gabriel', 'Ariel'] });
question1.showQuestion();
