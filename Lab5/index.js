import PathParameters from "./PathParameters.js";
import QueryParameters from './QueryParameters.js';
import WorkingWithObjects from './WorkingWithObjects.js';
import WorkingWithArrays from './WorkingWithArrays.js';

let todos = [
  { id: 1, description: "Complete Node.js assignment", completed: false },
  { id: 2, description: "Prepare for React.js exam", completed: true },
];

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
}
