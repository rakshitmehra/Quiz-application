#include <iostream>
#include <unordered_set>
using namespace std;

int findlargestseq(int a[], int n)
{
    unordered_set<int> s;
    for (int i = 0; i < n; i++)
    {
        s.insert(a[i]); // O(1);
    }

    // iterate over all the elemnts
    //  target those from which a streak can start
    int max_streak = 1;
    for (int i = 0; i < n; i++)
    {
        if (s.find(a[i] - 1) == s.end())
        {
            // a[i] is a starting point of streak
            // traverse entire range that is contained in that streak
            int next_no = a[i] + 1;
            int streak_len = 1;
            while (s.find(next_no) != s.end())
            {
                next_no += 1;
                streak_len++;
            }
            max_streak = max(streak_len, max_streak);
        }
    }
    return max_streak;
}
int main()
{
     int a[] = {1,2,0,1};
    int n = 4;
    cout<<findlargestseq(a,n)<<endl;
    return 0;
}