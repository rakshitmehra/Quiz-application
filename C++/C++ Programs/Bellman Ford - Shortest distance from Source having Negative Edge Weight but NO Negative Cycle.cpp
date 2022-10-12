class Solution{
	public:

    vector <int> bellman_ford(int N, vector<vector<int>> &edges, int S) {
        
        int MAXE = 1e8;
        
        vector<int> distance(N, MAXE);
        distance[S] = 0;
        
        int M = edges.size();
        
        for(int repeat = 0 ; repeat <= N - 1 ; repeat++){
            for(int i = 0 ; i < M ; i++){
                int u = edges[i][0];
                int v = edges[i][1];
                int wt = edges[i][2];
                
                if(distance[u] != MAXE){
                    distance[v] = min(distance[v] , wt + distance[u]);
                }
                
            }
        }
        
        return distance;
        
    }
};
