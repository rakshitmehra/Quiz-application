#include <iostream>
#include <queue>
using namespace std;

// To print the right view of any binary tree


// Here we are defining the node where initially left and right is NULL 
class node
{
public:
    int data;
    node *left;
    node *right;

    node(int d)
    {
        data = d;
        left = right = NULL;
    }
};

// This function is used to build a binary tree level by level.
void leverorderbuild(node *&root)
{
    int d;
    cin >> d;
    root = new node(d);
    queue<node *> q; //queue is basically used to store the nodes of tree
    q.push(root);
    while (!q.empty())
    {
        node *f = q.front();
        q.pop();

        int c1, c2;
        cin >> c1 >> c2;
        if (c1 != -1)
        {                                   //-1 is the NULL point here
            f->left = new node(c1);
            q.push(f->left);
        }
        if (c2 != -1)
        {
            f->right = new node(c2);
            q.push(f->right);
        }
    }
}

// ***Main function***
void printrightview(node *root, int &maxlevel, int level)
{
    if (root == NULL)
    {
        return;
    }

    if (maxlevel < level)
    {
        cout << root->data << " ";
        maxlevel = level;
    }

    printrightview(root->right, maxlevel, level + 1);
    printrightview(root->left, maxlevel, level + 1);
}


int main()
{
    node*root=NULL;
    leverorderbuild(root);
    int maxlevel =-1;
    printrightview(root,maxlevel,0);
    return 0;
}