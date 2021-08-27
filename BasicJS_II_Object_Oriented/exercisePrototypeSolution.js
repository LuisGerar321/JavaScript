//Parent Class
/*Constructor Parent*/
function Question(data){

    if(new.target === Question){
        throw new Error('You can not instantiate this class!!');
    }

    this.text = data.text;
    this.type = data.type;
}
/*Method parent*/
Question.prototype.getText  = function (){
    return this.text;
};

// Child class
/*Constructor*/
function QuestionMultipleChoice(data){
    /*Super invoking Parent Constructor by Explicit binding*/
    Question.call(this, data) /*Im expecifien to take QuestionMult Context*/
    /*Child constructor*/
    this.options = data.options;

}
/*Extend prototype from Paren Class*/
QuestionMultipleChoice.prototype  = Object.create( Question.prototype);

/*Child methods*/
QuestionMultipleChoice.prototype.getOptions = function (){
    return this.options;
}

QuestionMultipleChoice.prototype.showQuestion = function(){
    console.log(this.getText());
    console.log(this.options);
}


// Factory class was converted in a Clousure Factory
const QuestionFactory = {
    createQuestion : function(question){
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
