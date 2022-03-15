class Stack{
	// Your code below!
	constructor(){
		this.items = [];
		this.size= 0;
	}
	push(element)
{
	let numberOfItems = this.items.length;
	this.items.push(element);
	if (this.items.length-numberOfItems===1) {
		this.size+=1 }
}
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    this.size-=1;
    return this.items.pop();
}
}

module.exports = Stack