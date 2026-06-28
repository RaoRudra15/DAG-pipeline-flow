from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    adj_list = {node['id']: [] for node in data.nodes}
    in_degrees = {node['id']: 0 for node in data.nodes}

    for edge in data.edges:
        source = edge.get('source')
        target = edge.get('target')

        if source in adj_list and target in adj_list:
            adj_list[source].append(target)
            in_degrees[target] += 1

    queue = [node_id for node_id in in_degrees if in_degrees[node_id] == 0]
    visited_nodes_count = 0

    while queue:
        current_node = queue.pop(0)
        visited_nodes_count += 1

        for neighbor in adj_list.get(current_node, []):
            in_degrees[neighbor] -= 1
            if in_degrees[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited_nodes_count == num_nodes

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
