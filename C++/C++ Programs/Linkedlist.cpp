#include <iostream>
using namespace std;
class node
{
public:
    int data;
    node *next;

    node(int d)
    {
        data = d;
        next = NULL;
    }
};

// To insert a node at start or head
void insertathead(node *&head, int d)
{
    // the problem here is that we r passing it by value and the change will not get reflected inside the main function
    // solution is we have to pass the head pointer by reference
    if (head == NULL)
    {
        head = new node(d);
        return;
    }
    // why dynamic allocation--->node will get destroyed after static allocation...so dynamic allocation will help us to keep the track of all lists without getting destroyed
    node *n = new node(d);
    n->next = head;
    head = n;
}


// To take inout of the linked list
node *input()
{
    int d;
    cin >> d;
    node *head = NULL;
    while (d != -1)
    {
        insertathead(head, d);
        cin >> d;
    }
    return head;
}

// calculate the length of the linked list
int calculate_the_length(node *head)
{
    node *temp = head;
    int cnt = 0;
    while (temp != NULL)
    {
        cnt++;
        temp = temp->next;
    }
    return cnt;
}

// to find the kth from end in a linked list
node *kthfromend(node *head, int k)
{
    if (head == NULL or head->next == NULL)
    {
        return head;
    }

    node *slow = head;
    node *fast = head;
    while (k > 0)
    {
        fast = fast->next;
        k--;
    }

    while (fast != NULL and fast->next != NULL)
    {
        slow = slow->next;
        fast = fast->next;
    }

    slow = slow->next;
    return slow;
}

void print(node *head)
{
    while (head != NULL)
    {
        cout << head->data << " ->";
        head = head->next;
    }
}

ostream& operator<<(ostream &os, node *head)
{
    print(head);
    return os;
}

istream &operator>>(istream &cin, node *&head)
{
    head = input();
    return cin;
}

node *merge(node *a, node *b)
{
    if (a == NULL)
    {
        return b;
    }
    if (b == NULL)
    {
        return a;
    }
    // take a head pointer
    node *c;
    if (a->data < b->data)
    {
        c = a;
        c->next = merge(a->next, b);
    }
    else
    {
        c = b;
        c->next = merge(a, b->next);
    }

    return c;
}
node*midpoint(node*head){
    if(head == NULL or head->next==NULL){
        return head;
    }
    node*slow = head;
    node*fast = head->next;

    while(fast->next!=NULL and fast!=NULL){
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

node* mergesort(node*head){
    //base case
    if(head==NULL or head->next==NULL){
        return head;
    }

    node*mid = midpoint(head);
    node*a = head;
    node*b = mid->next;

    mid->next = NULL;
    //rec sorting
    a = mergesort(a);
    b = mergesort(b);

    //merge them
    node*c = merge(a,b);
    return c;
}

int main()
{
    // int k;
    // node*head = input();
    // cin>>k;
    // int n = calculate_the_length(head);
    // node *temp = kthfromend(head,n-k+1);
    // cout<<temp->data<<endl;
    // cout<<calculate_the_length(head)<<endl;

    node *head1;
    node *head;
    cin >> head >> head1;
    cout << head << head1;
    cout << endl;
    node *ans = merge(head, head1);
    cout << ans << endl;
    return 0;
}