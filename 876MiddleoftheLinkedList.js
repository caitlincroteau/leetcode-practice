// Jan 3, 2023
//876. Middle of the Linked List

//NEED TO COME BACK TO THIS ONE!

//have to iterate through linked list in order to know the size. Can access elements without iterration

//approach one, iterate through ll and copy out values to an array,
//then find middle of array
//time complexity = O(n)
//space complexity = O(n) because we create the array
//BUT this defeatst the point of using a linked list
const middleNode = function (head) {
  let node = head;
  let returnNode = head;
  let nodeArr = [];

  while (node) {
    nodeArr.push(node.val);
    node = node.next;
  }

  for (let i = 0; i <= nodeArr.length / 2 - 1; i++) {
    returnNode = returnNode.next;
  }

  return nodeArr;
};

//approach two
//use pointers to keep track of nodes
//middle node only moves up when the list grows by two nodes
//eg every other step
//current node moves up every time
//time complexity = O(n)
//space complexity = O(1) constant because we only use the list

const middleNode2 = function (head) {
  let middle = head;
  let end = head;

  while (end && end.next) {
    middle = middle.next;
    end = end.next.next;
  }

  return middle;
};
//THIS IS THE BEST SOLUTION ^^^

head = [1, 2, 3, 4, 5];
//Output: [3,4,5]
//Explanation: The middle node of the list is node 3.

console.log(middleNode(head));
