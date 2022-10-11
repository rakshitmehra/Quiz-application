#include <iostream>
using namespace std;
// In this program...we have to rotate the matrix by 180deg
void reverserows(int a[][100], int n)
{
    for (int row = 0; row < n; row++)
    {

        // swapping the elements
        int x = 0, y = n - 1;
        while (y > x)
        {
            swap(a[row][x], a[row][y]);
            x++;
            y--;
        }
    }

}

void transpose(int a[][100], int n)
{

    // taking transpose of elements
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (j > i)
            { // or i>j
                swap(a[i][j], a[j][i]);
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << a[i][j] << " ";
        }
        cout << endl;
    }
}

int main()
{
    int a[100][100];
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }
    reverserows(a, n);
    transpose(a, n);
    return 0;
}