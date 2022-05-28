

// do DFS traversal from a given source
// vertex. DFS(int s) traverses vertices
// reachable from s.

class Graph{
	
    constructor(V)
    {
        this.V = V;
        this.adj = new Array(V);
        
        for(let i = 0; i < this.adj.length; i++)
            this.adj[i] = [];
    }
    
    // To add an edge to graph
    addEdge(v, w)
    {
        
        // Add w to v’s list.
        this.adj[v].push(w);
    }
    
    // Prints all not yet visited
    // vertices reachable from s
    DFS(s)
    {
        
        // Initially mark all vertices as not visited
        let visited = [];
        for(let i = 0; i < this.V; i++)
            visited.push(false);
    
        // Create a stack for DFS
        let stack = [];
        
        // Push the current source node
        stack.push(s);
        
        while(stack.length != 0)
        {
            
            // Pop a vertex from stack and print it
            s = stack.pop();
            
            // Stack may contain same vertex twice. So
            // we need to print the popped item only
            // if it is not visited.
            if (visited[s] == false)
            {
                document.write(s + " ");
                visited[s] = true;
            }
            
            // Get all adjacent vertices of the
            // popped vertex s. If a adjacent has
            // not been visited, then push it
            // to the stack.
            for(let node = 0;
                    node < this.adj[s].length;
                    node++)
            {
                if (!visited[this.adj[s][node]])
                    stack.push(this.adj[s][node])
            }
        }
    }
    }
    
    // Driver code
    
    // Total 5 vertices in graph
    let g = new Graph(5);
    g.addEdge(1, 0);
    g.addEdge(0, 2);
    g.addEdge(2, 1);
    g.addEdge(0, 3);
    g.addEdge(1, 4);
    
    document.write("Following is the Depth " +
                "First Traversal</br> :");
    g.DFS(0);
    
    
    
    
    