import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

const Body = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: '1', title: 'Task 1' },
      { id: '2', title: 'Task 2' },
      { id: '3', title: 'Task 3' },
    ],
    inProgress: [
      { id: '4', title: 'Task 4' },
      { id: '5', title: 'Task 5' },
    ],
    done: [
      { id: '6', title: 'Task 6' },
      { id: '7', title: 'Task 7' },
    ],
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder tasks in the same column
      const columnTasks = Array.from(tasks[source.droppableId]);
      const [removed] = columnTasks.splice(source.index, 1);
      columnTasks.splice(destination.index, 0, removed);

      setTasks((prevTasks) => ({
        ...prevTasks,
        [source.droppableId]: columnTasks,
      }));
    } else {
      // Move task to a different column
      const sourceTasks = Array.from(tasks[source.droppableId]);
      const destinationTasks = Array.from(tasks[destination.droppableId]);
      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);

      setTasks((prevTasks) => ({
        ...prevTasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destinationTasks,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex justify-center">
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow m-4"
              style={{ width: '300px' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="text-xl font-semibold mb-4">To Do</h2>
              {tasks.todo.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card title={task.title} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="inProgress">
          {(provided) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow m-4"
              style={{ width: '300px' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="text-xl font-semibold mb-4">In Progress</h2>
              {tasks.inProgress.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card title={task.title} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="done">
          {(provided) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow m-4"
              style={{ width: '300px' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="text-xl font-semibold mb-4">Done</h2>
              {tasks.done.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card title={task.title} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Body;
