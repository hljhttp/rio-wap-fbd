/* linked list prototype */
function LinkedList(){

    this.head = null;
    this.length = null;
}


function node(value,next,prev){

    // node store own JSON value, next node and previous node 
    this.value = value;
    this.prev  = prev;
    this.next  = next; 
   
}

LinkedList.prototype.push = function(value)
{
        // push data to in head attribute 
        if(this.head == null){
           
           // create new node.
           inode = new node(value,null,null)
           // insert value to head.
           this.head = inode;
           this.length     = this.getLength();

        }else{
        // if head does exit.
        // create new node. 
        // set current head to head.next of incoming node 
          inode = new node(value,this.head,null)
        // set current head.prev by incoming node 
           inodeTemp     = inode;
           headTemp      = this.head;
           headTemp.prev = inode;
        // set incoming node to head ( now incoming node is current head)   
           this.head     = inode;
        // calculate new lenght    
           this.length   = this.getLength();
      
        }  
        // limit size of linked list is 10  
        this.limitLength(10,this.head); 
}


// push data when pointer is not the lastest node (undo,redo)
LinkedList.prototype.pushWithpointer = function(value,pointerObj){

       // create new node 
       inode = new node(value,pointerObj,null)
       // set pointer object  head.prev by incoming node 
       inodeTemp     = inode;
       headTemp      = pointerObj;
       headTemp.prev = inode;
       this.head     = inode;
       this.length   = this.getLength();

       // limit size of linked list is 10  
       this.limitLength(10,this.head); 

}

LinkedList.prototype.pop = function()
{
      // remove the lastest node 
  
      this.head.value = this.head.next.value;
      this.head.next  = this.head.next.next;
      this.length     = this.getLength();
           
}


LinkedList.prototype.search = function(searchValue){

      // searchnode by value.
    
       find = function(data){

            while(currentHead){
                 if(currentHead.value == data.value && currentHead.next == data.next && currentHead.prev == data.prev){
                    return currentHead;
                 }else{
                    currentHead = currentHead.next;
                    return find(data);
                 }
            }
       }       

    currentHead = this.head;
    result =   find(searchValue);
    return result;
}



LinkedList.prototype.back = function(currentValue){

    // get node by value and return head.next of node 
    // "head.next" refer to node that insert before current node 
    try {

        stepBackObject = this.search(currentValue);
        return stepBackObject.next;    

    } catch (error) {   
       // 
    }
    



}

LinkedList.prototype.forward  = function(currentValue){

    // get node by value and return head.prev of node 
    // "head.prev" refer to node that insert after current node
        try {
            stepForwardObject = this.search(currentValue); 
            return stepForwardObject.prev;            
        } catch (error) {
            
        }



}


LinkedList.prototype.getLength = function(){

        // get linked list length by calculate node.
         if(this.head == null){
            return 0;
         }
        round = 1;
        currentHead =  this.head
        while(currentHead.next != null){

              round = round + 1;
              currentHead = currentHead.next;
        }
        
        return round;


}


LinkedList.prototype.limitLength = function (limitNum,currentObj){

    // limit linked list node 

          currentObjTemp = currentObj
          i = 1
          // round of loop define by limitnum parameter.
          while(i<=limitNum){
            
            if(currentObjTemp.next == null ){

                this.length   = this.getLength();
                return currentObj
            } 
            if(i == limitNum){              
             
              currentObjTemp.next = null;
             
              this.length   = this.getLength();
            }
            currentObjTemp = currentObjTemp.next            
            i++
          }

          return currentObj;
          
}


LinkedList.prototype.clearlist = function(){

       // remove all of head data 
       this.head = null;     
      
}  
