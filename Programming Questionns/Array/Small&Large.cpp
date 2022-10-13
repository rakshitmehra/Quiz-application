#include <iostream>
using namespace std;
 
int main() {
    int x[] = {1243, 9841, 1000, 8884, 1030, 1349}; //integer array
    int len = sizeof(x) / sizeof(x[0]); //get array length
//    cout<<sizeof(x[3])<<endl;
//    cout<<sizeof(x)<<endl;
     
    // find smallest only if there is atleast one element in array
    cout<<"[ ";
    for(int j{0}; j<len;j++){
        cout<<x[j]<<" ";
    }
    cout<<"]"<<endl;
    if ( len > 0 ) {
        int smallest = x[0];
        int largest = x[0]; //assume that first element is smallest
         
        for ( int i = 1; i < len; i++ ) {
            if ( smallest > x[i] ) {
                smallest = x[i]; //update smallest
            }
             if ( largest < x[i] ) {
                largest = x[i]; //update smallest
            }
        }
         
        cout << "Smallest element in given array is  : " << smallest << endl;
        cout << "Largest element in given array is  : " << largest << endl;
    } else {
        cout << "No elements in the array." << endl;
    }
}
