#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int x) {
   for (int i = 0; i < n; i++) {
      if (arr[i] == x) {
         return i;
      }
   }
   return -1;
}

int main() {
   int arr[] = {10, 20, 30, 40, 50, 60};
   int n = sizeof(arr) / sizeof(arr[0]);
   int x = 40;
   int result = linearSearch(arr, n, x);
   if (result == -1) {
      cout << "Element not found";
   } else {
      cout << "Element found at index " << result;
   }
   return 0;
}
