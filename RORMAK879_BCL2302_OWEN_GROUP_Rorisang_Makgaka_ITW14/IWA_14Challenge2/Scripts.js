// script.js

function add(a, b) {
	return a + b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  function internal() {
	const added = this.add(this.internal.a, this.internal.b);
	const multiplied = this.multiply(this.internal.a, this.internal.b);
	return {
	  added,
	  multiplied,
	};
  }
  
  const example1 = {
	internal: {
	  a: 2,
	  b: 4,
	  c: 8,
	},
	add,
	multiply,
	calculate: internal,
  };
  
  const example2 = {
	internal: {
	  a: 2,
	  b: 2,
	  c: 3,
	},
	add,
	multiply,
	calculate: internal,
  };
  
  console.log(example1.calculate()); // { added: 6, multiplied: 8 }
  console.log(example2.calculate()); // { added: 4, multiplied: 4 }
  