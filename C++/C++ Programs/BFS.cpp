#include <iostream>
#include <queue>
#include <vector>
using namespace std;

void bfs(vector<int> adj[], int start, bool visited[]) {
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int u = q.front();
        cout << u << " ";
        q.pop();

        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}

int main() {
    int n = 6; // number of nodes
    vector<int> adj[n];

    // add edges to the graph
    adj[0].push_back(1);
    adj[0].push_back(2);
    adj[1].push_back(2);
    adj[2].push_back(0);
    adj[2].push_back(3);
    adj[3].push_back(3);
    adj[4].push_back(5);
    adj[5].push_back(4);

    bool visited[n] = {false};

    // perform BFS from all unvisited nodes
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(adj, i, visited);
        }
    }

    return 0;
}
