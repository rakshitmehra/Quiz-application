 #include <iostream>
using namespace std;


// This is a famous question which is often asked in interviews...To calculate the maximum water trapped 
int main()
{
   int t;   
   cin >> t;
   while (t > 0)
   {
      int n;
      cin >> n;

      int a[n];
      for (int i = 0; i < n; i++)
      {
         cin >> a[i];
      }

      int right[n] = {0};
      int left[n] = {0};
      int maxl = 0;

    // in this approach I go with two approaches nd it total takes O(n^2) time complexity
    // first I calculated the left part in which what is the maximum block of height
      for (int i = 0; i < n; i++)
      {
         maxl = a[i];
         for (int j = 0; j < i; j++)
         {

            // if (a[j] > maxl)
            // {
            //    maxl = a[j];
            // }
            maxl = max(a[j],maxl);
         }
         left[i] = maxl;
      }
      // for (int i = 0; i < n; i++)
      // {
      //    cout<<right[i]<<" ";
      // }
      
      int maxr = 0;
    // second I calculated the right part in which what is the maximum block of height

      for (int i = n - 1; i >= 0; i--)
      {
         maxr = a[i];
         for (int j = n - 1; j > i; j--)
         {
            if (a[j] > maxr)
            {
               maxr = a[j];
            }
         }
         right[i] = maxr;
      }

    // At last min of left and right minus the current one...the total sum is my answer
      int sum = 0;
      for (int i = 0; i < n; i++)
      {
         sum += min(left[i], right[i]) - a[i];
      }

      cout << sum;
   }

   return 0;
}