#include <iostream>
#include <vector>
#include <algorithm>
#include <bits/stdc++.h>

using namespace std;
// calc find load on each processor = sum/n

int main()
{
    int n;
    cin >> n;
    vector<int> v;
    
    for (int i = 0; i < n; i++)
    {
        int no;
        cin >> no;
        v.push_back(no);
    }
    int sum = accumulate(v.begin(),v.end(),0);
    int load = sum/n;
    if(sum%n!=0){
        cout<<-1<<endl;
    }
    else{
        int diff=0,maxload=0;
        for(int i=0;i<n;i++){
            diff += abs(v[i]-load);
            int ans = max(diff,-diff);
            maxload = max(maxload,ans);
        }
        cout<<maxload<<endl;
    }

    return 0;
}
