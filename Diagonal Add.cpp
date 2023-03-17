#include <iostream>
using namespace std;

int main() {
  int row;
  int col;
  int sum = 0; 
  cout << "Enter the size of the row matrix: ";
  cin >> row;
  cout << "Enter the size of the column matrix: ";
  cin >> col;
  int a[row][col]; 
  cout << "Enter the elements of the matrix: " << endl;
  for(int i=0; i<row; i++) {
    for(int j=0; j<col; j++) {
      cin >> a[i][j]; 
      if(i == j) {
        sum += a[i][j]; 
      }
    }
  }
  cout << "The sum of diagonal elements is " << sum << endl; 
  return 0;
}
