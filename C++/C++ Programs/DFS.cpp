#include <iostream>
#include <vector>
using namespace std;

void dfs(vector<int> adj[], int u, vector<bool>& visited) {
   visited[u] = true;
   cout << u << " ";
   for (int v : adj[u]) {
      if (!visited[v]) {
         dfs(adj, v, visited);
      }
   }
}

int main() {
   int n = 4;
   vector<int> adj[n];
   adj[0].push_back(1);
   adj[0].push_back(2);
   adj[1].push_back(2);
   adj[2].push_back(0);
   adj[2].push_back(3);
   adj[3].push_back(3);
   vector<bool> visited(n, false);
   dfs(adj, 2, visited);
   return 0;
}
