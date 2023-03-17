#include <iostream>
using namespace std;

int binarySearch(int arr[], int l, int r, int x) {
   while (l <= r) {
      int mid = l + (r - l) / 2;
      if (arr[mid] == x) {
         return mid;
      }
      if (arr[mid] < x) {
         l = mid + 1;
      } else {
         r = mid - 1;
      }
   }
   return -1;
}

int main() {
   int arr[] = {10, 20, 30, 40, 50, 60};
   int n = sizeof(arr) / sizeof(arr[0]);
   int x = 40;
   int result = binarySearch(arr, 0, n - 1, x);
   if (result == -1) {
      cout << "Element not found";
   } else {
      cout << "Element found at index " << result;
   }
   return 0;
}
