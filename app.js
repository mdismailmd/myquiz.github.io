const questions = [
{
	'ques': 'Which of the following is a markup language?',
	'a': 'HTML',
	'b': 'CSS',
	'c': 'Javascript',
	'd': 'PHP',
	'correct': 'a'
},
{
	'ques': 'What was the javascript launched?',
	'a': '1996',
	'b': '1995',
	'c': '1994',
	'd': 'None above',
	'correct': 'b'
},
{
	'ques': 'What does the CSS stands for?',
	'a': 'HTML',
	'b': 'Cascading Style Sheet',
	'c': 'Javascript',
	'd': 'PHP',
	'correct': 'b'
},
{
	'ques': 'Which of the following is the telephone based shared Service Centre?',
	'a': 'Call centre',
	'b': 'ATM',
	'c': 'Phone centre',
	'd': 'None of these',
	'correct': 'a'
},
{
	'ques': 'Which of the following is an IT enabled service?',
	'a': 'Database',
	'b': 'Spreadsheet',
	'c': 'Word processor',
	'd': 'E-Governance',
	'correct': 'd'
},
{
	'ques': 'A common reason for changing an information system is',
	'a': 'New technology',
	'b': 'New requirements',
	'c': 'Problems in the existing system',
	'd': 'All of these',
	'correct': 'd'
},
{
	'ques': 'ITES stands for ___',
	'a': 'Information Technology Entrusted Systems',
	'b': 'Information Technology Extended Services',
	'c': 'Information Technology Enabled Services',
	'd': 'Improving Technology Enlighted Services',
	'correct': 'c'
},
{
	'ques': '____ refers to conversion of non-digital material to digital form.',
	'a': 'Digitization',
	'b': 'Data transfer',
	'c': 'Transcription',
	'd': 'None of the given',
	'correct': 'a'
},
{
	'ques': 'Which of the following is not an IT enabled service?',
	'a': 'Call centre’s',
	'b': 'E-Governance',
	'c': 'Data digitization',
	'd': 'Word processor',
	'correct': 'd'
},
{
	'ques': 'A turnkey package includes',
	'a': 'Training',
	'b': 'Software',
	'c': 'Hardware',
	'd': 'All of these',
	'correct': 'd'
}


]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInput = document.querySelectorAll('.options')
const loadquestion = () =>{
	if(index === total){
		return endquiz();
	}
	reset();
	const data = questions[index]
	quesbox.innerHTML = `${index+1}) ${data.ques}`;
	optionInput[0].nextElementSibling.innerText = data.a;
	optionInput[1].nextElementSibling.innerText = data.b;
	optionInput[2].nextElementSibling.innerText = data.c;
	optionInput[3].nextElementSibling.innerText = data.d;


}


const submitquiz = () =>{
	const data = questions[index];
	const ans = getAns()
	if (ans === data.correct){
		right++;
	}
	else{
		wrong++;
	}
	index++;
	loadquestion();
	return;
}

const getAns = () =>{
	let answer;
	optionInput.forEach(
			(input) => {
				if(input.checked){
					answer= input.value;

				}

			}
		)
	return answer;
}

const reset = () =>{
	optionInput.forEach(
			(input) => {
				input.checked = false;
					
				

			}
		)
}


const endquiz = () =>{
	document.getElementById('box').innerHTML = `<h3>Thank you for playing the Quizz </h3>
	 <h2> ${right} of ${total} are Correct</h2>`
}

loadquestion();