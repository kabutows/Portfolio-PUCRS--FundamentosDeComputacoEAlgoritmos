class node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.count = 0
        this.header = null
        this.tail = null
    }
    add(element){
        if(this.count == 0)
            this.header=this.tail=element
        else
            this.tail.next = element
            this.tail = element
            this.count++
        
    }
    print(){
        var aux = this.header
        while(aux != null){
            console.log(aux.element)
            aux = aux.next
        }
        console.log("==============")
    }
}

var myLL = new linkedList()

myLL.add(new node(1))
myLL.print()

myLL.add(new node(2))
myLL.print()

myLL.add(new node(4))
myLL.print()

myLL.add(new node(3))
myLL.print()