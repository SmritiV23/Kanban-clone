import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

const Body = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: '1', title: 'Brainstroming'},
      { id: '2', title: 'Research' },
      { id: '3', title: 'Wireframes' },
    ],
    inProgress: [
      { id: '4', title: 'Onboarding Illustration' },
      { id: '5', title: 'Moodboard' },
    ],
    done: [
      { id: '6', title: 'Mobile App' },
      { id: '7', title: 'Design System' },
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
      <div className="flex justify-around">
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow m-4"
              style={{ width: '350px' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="text-xl font-semibold mb-4">To Do</h2>
              <div className=" h-0.5 bg-[#5030E5] my-4"></div>
              {tasks.todo.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='m-2'
                    >
                      <Card title={task.title}  />
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
              style={{ width: '350px' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="text-xl font-semibold mb-4">In Progress</h2>
              <div className=" h-0.5 bg-[#FFA500] my-4"></div>
              {tasks.inProgress.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='m-2'
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
              style={{ width: '350px' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="text-xl font-semibold mb-4">Done</h2>
              <div className=" h-0.5 bg-[#8BC48A] my-4"></div>
              {tasks.done.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='m-2'
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
