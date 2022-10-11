#include <iostream>
using namespace std;
//  this programm calculates the maximum circular sum of the array...Using Kadaene's Algorithm
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        int a[n];
        int sum = 0;
        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
            sum += a[i];
        }
        int ans;
        int max_sum = a[0], min_sum = a[0], max_so_far = a[0], min_so_far = a[0];
        for (int i = 1; i < n; i++)
        {
            int current_element = a[i];
            max_sum = max(max_sum + current_element, current_element);
            min_sum = min(min_sum + current_element, current_element);
            max_so_far = max(max_sum, max_so_far);
            min_so_far = min(min_sum, min_so_far);
        }
        ans = max(max_so_far, (sum - (min_so_far)));
        cout << ans << endl;
    }

    return 0;
}