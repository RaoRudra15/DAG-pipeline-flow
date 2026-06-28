# DAG-pipeline-builder

A full-stack, interactive node-based pipeline builder built with React (Frontend) and FastAPI (Python Backend). This application allows users to visually construct data pipelines, dynamically parse text variables, and validate workflows against infinite loops using a robust Directed Acyclic Graph (DAG) cycle-detection algorithm.

## Features

- **Node Abstraction Layer:** Engineered a reusable `BaseNode` component template to effortlessly manage shared layouts, handle positions, and global theme configurations across all 9 unique nodes.
- **Custom Pipeline Nodes:** Extended the default canvas architecture to support 5 custom nodes: *API Request, If/Else Logic, Math Operator, Sticky Note,* and *Database Storage*.
- **Smart Text Node:** Features real-time text measurement for automatic width/height scaling and an inline regex variable parser that spawns dedicated target handles on the fly when wrapping variables in `{{ double_curly_brackets }}`.
- **Tailwind UI Styling:** Replaced raw CSS configurations with a unified, modern, color-coded dashboard layout to enhance node scanability.
- **Backend DAG Verification:** Integrated a Python FastAPI parsing endpoint utilizing Kahn's Algorithm for $O(V + E)$ topological graph verification, preventing application crashes by catching feedback loops instantly upon form submission.

## Tech Stack

- **Frontend:** React, React Flow, Tailwind CSS, JavaScript
- **Backend:** Python, FastAPI, Pydantic, Uvicorn

---

## Getting Started

Follow these instructions to spin up the application environment locally or within a GitHub Codespace.

### 1. Backend Setup (FastAPI)

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Start the FastAPI server using Uvicorn:
   ```bash
   uvicorn main:app --reload
   ```
   *The backend server will launch at `http://127.0.0.1:8000`.*

### 2. Frontend Setup (React)

1. Open a separate terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the necessary node modules and dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   *The application UI will automatically spin up in your browser window at `http://localhost:3000`.*

---

## How to Test the Project

1. Drag core components or any of the new custom nodes (*API, Condition, Math, Note, Database*) from the toolbar onto the interactive canvas.
2. Link output handles into corresponding inputs to build a functional data pipeline.
3. Open a **Text Node** and type a statement containing variables inside curly braces (e.g., `{{ user_id }}`). Watch the left margin dynamically generate connection points.
4. Click **Submit Pipeline** to fire the payload array directly to the Python backend. An alert box will display the structural analysis, rendering node counts, edge configurations, and the real-time DAG status.
