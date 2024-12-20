# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer

Very similar to the augmenting path exercise, our worst case is if we have to visit every single vertex and edge to find our solution (if there is one).

We visit every vertex, done inside the helper function.

At every vertex, we check all of its edges as well.

This leads us to having a worst case time complexity of $\Theta (|V| + |E|)$, where V is the number of vertices and E is the number of edges. 

## Sources

Prompted ChatGPT to help me create the tests. Asked it to create four tests cases that that will return the path to the target node. Wrote the rest of the test code myself basing it on previous test from other exercises.

## Bonus

Implement and analyze breadth-first search.
