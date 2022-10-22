#include<iostream>
using namespace std;


int main(){
    int n;  //for order of square matrix
    cin>>n;
    int arr[n][n];
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++)
            cin>>arr[i][j];
    }

    int leftDiagonal =0, rightDiagonal =0;
    for(int i=0;i<n;i++){
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][n-i+1];
    }
    cout<<"Sum of elements on right diagonal: "<<rightDiagonal<<endl;
    cout<<"Sum of elements on left diagonal: "<<leftDiagonal<<endl;
}