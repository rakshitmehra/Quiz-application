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

int exponentialSearch(int arr[], int n, int x) {
   if (arr[0] == x) {
      return 0;
   }
   int i = 1;
   while (i < n && arr[i] <= x) {
      i = i * 2;
   }
   return binarySearch(arr, i / 2, min(i, n - 1), x);
}

int main() {
   int arr[] = {10, 20, 30, 40, 50, 60};
   int n = sizeof(arr) / sizeof(arr[0]);
   int x = 40;
   int result = exponentialSearch(arr, n, x);
   if (result == -1) {
      cout << "Element not found";
   } else {
      cout << "Element found at index " << result;
   }
   return 0;
}
