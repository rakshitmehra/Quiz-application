#include<iostream>
using namespace std;

class Node {

    public:
    int data;
    Node* next;

    
    Node(int data) {
        this -> data = data;
        this -> next = NULL;
    }

    
    ~Node() {
        int value = this -> data;
        if(this->next != NULL) {
            delete next;
            this->next = NULL;
        }
        cout << " memory is free for node with data " << value << endl;
    }

};

void insertAtHead(Node* &head, int d) {
    Node* temp = new Node(d);
    temp -> next = head;
    head = temp;
}

void insertAtTail(Node* &tail, int d) {
    Node* temp = new Node(d);
    tail -> next = temp;
    tail  = temp;
}

void print(Node* &head) {
    Node* temp = head;

    while(temp != NULL ) {
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}

void insertAtPosition(Node* &tail, Node* & head, int position, int d) {
    if(position == 1) {
        insertAtHead(head, d);
        return;
    }

    Node* temp  = head;
    int cnt = 1;

    while(cnt < position-1) {
        temp = temp->next;
        cnt++;
    }
    if(temp -> next == NULL) {
        insertAtTail(tail,d);
        return ;
    }
    Node* nodeToInsert = new Node(d);

    nodeToInsert -> next = temp -> next;

    temp -> next = nodeToInsert;
}

void deleteNode(int position, Node* & head) { 
      if(position == 1) {
        Node* temp = head;
        head = head -> next;
        temp -> next = NULL;
        delete temp;
    }
    else
    {
        
        Node* curr = head;
        Node* prev = NULL;

        int cnt = 1;
        while(cnt < position) {
            prev = curr;
            curr = curr -> next;
            cnt++;
        }

        prev -> next = curr -> next;
        curr -> next  = NULL;
        delete curr;

    }
}

int main() {
    
    
   


    return 0;
}
