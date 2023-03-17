#include <iostream>
using namespace std;

int ternarySearch(int arr[], int l, int r, int x) {
   if (r >= l) {
      int mid1 = l + (r - l) / 3;
      int mid2 = r - (r - l) / 3;
      if (arr[mid1] == x) {
         return mid1;
      }
      if (arr[mid2] == x) {
         return mid2;
      }
      if (x < arr[mid1]) {
         return ternarySearch(arr, l, mid1 - 1, x);
      } else if (x > arr[mid2]) {
         return ternarySearch(arr, mid2 + 1, r, x);
      } else {
         return ternarySearch(arr, mid1 + 1, mid2 - 1, x);
      }
   }
   return -1;
}

int main() {
   int arr[] = {10, 20, 30, 40, 50, 60};
   int n = sizeof(arr) / sizeof(arr[0]);
   int x = 40;
   int result = ternarySearch(arr, 0, n - 1, x);
   if (result == -1) {
      cout << "Element not found";
   } else {
      cout << "Element found at index " << result;
   }
   return 0;
}
