#include <iostream>
#include <cstring>
using namespace std;

string longest_palindromic_substring(string str) {
    int n = str.length();
    bool table[n][n];
    memset(table, 0, sizeof(table));

    int maxLength = 1;
    for (int i = 0; i < n; ++i)
        table[i][i] = true;

    int start = 0;
    for (int i = 0; i < n - 1; ++i) {
        if (str[i] == str[i+1]) {
            table[i][i+1] = true;
            start = i;
            maxLength = 2;
        }
    }

    for (int k = 3; k <= n; ++k) {
        for (int i = 0; i < n-k+1; ++i) {
            int j = i+k-1;
            if (table[i+1][j-1] && str[i] == str[j]) {
                table[i][j] = true;

                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
        }
    }

    return str.substr(start, maxLength);
}

int main() {
    string str;
    cout << "enter a string:";
    cin >> str;
    cout << "Longest Palindromic Substring: " << longest_palindromic_substring(str);
    return 0;
}