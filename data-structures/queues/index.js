class Queue {
	// Your code below!
	constructor() {
		this.items = [];
		this.size= 0;
	}

	enqueue(element)
{    
	let numberOfItems = this.items.length;
	
	// adding element to the queue
	this.items.push(element);
	if (this.items.length-numberOfItems===1) {
		this.size+=1 }
}
dequeue()

{
    // removing element from the queue
    // returns underflow when called 
	// on empty queue
	
		this.size-=1 
		return this.items.shift();
}
}

module.exports = Queue


