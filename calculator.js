// changed the original regex
// var tokenTypes = [
//   ["NUMBER",    /^\d+/ ],
//   ["ADD",       /^\+/  ],
//   ["SUB",       /^\-/  ],
//   ["MUL",       /^\*/  ],
//   ["DIV",       /^\//  ],
//   ["LPAREN",    /^\(/  ],
//   ["RPAREN",    /^\)/  ]
// ];

var tokenTypes = [
	["NUMBER",    /\d+/g ],
	["ADD",       /\+/g  ],
	["SUB",       /\-/g  ],
	["MUL",       /\*/g  ],
	["DIV",       /\//g  ],
	["LPAREN",    /\(/g  ],
	["RPAREN",    /\)/g  ]
];



// Calculator
function Calculator(inputString) {
	this.tokenStream = this.lexer(inputString);
};

Calculator.prototype.lexer = (inputString) => {
	var tokenStream = [];

	tokenTypes.forEach((tokenType) => {
		var tokenName = tokenType[0],
			tokenRegexp = tokenType[1];

		var regexp = new RegExp(tokenRegexp),
			exec = regexp.exec(inputString);
		
		while(exec) {
			tokenStream[exec.index*1] = {
				name: tokenName,
				value: exec[0]
			}
			exec = regexp.exec(inputString);
		}
	})

	return tokenStream;
};

Calculator.prototype.peek = function() {
	return this.tokenStream[0];
};

Calculator.prototype.get = function() {
	return this.tokenStream.shift();
}




// Tree
function TreeNode(name) {
	console.log(arguments);
}


new TreeNode('a', 'b', 'c', 'd', 'f');





var test = new Calculator('1+(2*3)+4');
console.log(test.peek());
console.log(test.get());
console.log(test.peek());
