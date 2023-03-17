#include <iostream>
using namespace std;

int interpolationSearch(int arr[], int n, int x) {
   int lo = 0, hi = (n - 1);
   while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
      if (lo == hi) {
         if (arr[lo] == x) return lo;
         return -1;
      }
      int pos = lo + (((double)(hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));
      if (arr[pos] == x) {
         return pos;
      }
      if (arr[pos] < x) {
         lo = pos + 1;
      } else {
         hi = pos - 1;
      }
   }
   return -1;
}

int main() {
   int arr[] = {10, 20, 30, 40, 50, 60};
   int n = sizeof(arr) / sizeof(arr[0]);
   int x = 40;
   int result = interpolationSearch(arr, n, x);
   if (result == -1) {
      cout << "Element not found";
   } else {
      cout << "Element found at index " << result;
   }
   return 0;
}
