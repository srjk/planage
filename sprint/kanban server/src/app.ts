import express, { Application } from 'express';
import mongoose from 'mongoose';
import http from 'http';
import socketio from 'socket.io';
import cors from 'cors';
import * as request from "superagent";// import models here
import { KanbanSchema } from './schemas/board-schema';
import { IBoardState } from '../node_modules/proflo-sprint-lib/lib/board-interface';
import { IColumn } from '../node_modules/proflo-sprint-lib/lib/column-interface';
import { ITask } from '../node_modules/proflo-sprint-lib/lib/task-interface';
//sudo netstat -nlpt | grep :::3000 sudo kill -TERM
// import rootReducer here
import { rootReducer } from '../node_modules/proflo-sprint-lib/lib/store';
// import enums here
import { ProfloAgileActionTypes } from '../node_modules/proflo-sprint-lib/lib/action';

const app: Application = express();
const port = process.env.port || 3001;
const MONGO_URI = 'mongodb://127.0.0.1:27017/SprintsDB';
const server = http.createServer(app);
export const io = socketio(server);
app.use(express.json())
app.use(cors)
io.origins('*:*')

function convertToState(board) {
  let toBePushedColumns: IColumn[] = [];
  let tasks: ITask[] = [];
  let column: IColumn = {};
  let task: ITask = {};
  board[0].columns.forEach(element => {
    column.columnId = element.columnId
    column.columnName = element.columnName
    element.tasks.forEach((iteratedTask) => {
      task.taskId = iteratedTask.taskId,
        task.taskName = iteratedTask.taskName,
        task.taskAssignedTo = iteratedTask.taskAssignedTo,
        task.taskTshirtSize = iteratedTask.taskTshirtSize,
        task.taskCategory = iteratedTask.taskCategory,
        task.completedAt = iteratedTask.completedAt
      tasks.push(task);
      task = {}
    })
    column.tasks = tasks;
    tasks = [];
    toBePushedColumns.push(column);
    console.log('To be pushed columns :: ', toBePushedColumns);
    column = {};
  })
  console.log(board[0].columns)
  return toBePushedColumns;
}

io.on("connection", socket => {
  let previousId;
  const safeJoin = currentId => {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  socket.on('message', (boardProductId) => {
    console.log('Connected to room :: ', boardProductId)
    safeJoin(boardProductId);
    io.to(boardProductId).emit('message', { type: 'new-message', text: boardProductId })
  })
  socket.on('@@proflo-types/MOVE_CARD_WITHIN_COLUMN', (action) => {
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns
        }
        let newState = rootReducer(state, action);
        sprintBoard.findOneAndUpdate(state.id, {
          columns: newState.columns
        }, (err, data) => {
          console.log('this is what we recieved', data, err);
          if (err) {
            console.log('Error: ', err);
          }
        });
      }
    })
    socket.to(action.productId).emit('message', action);
  });
  socket.on('@@proflo-types/MOVE_CARD_ACROSS_COLUMN', (action) => {
    const options = {
      host: 'localhost',
      port: 8085,
      path: `/api/v1/products/${action.productId}/kanbanboard/tasks`,
      method: 'PUT'
    };
    if (action.payload.lastColumn == true) {
      const url = `http://localhost:8085/api/v1/products/${action.productId}/kanbanboard/tasks`;
      request.put(url)
      .send(action)
      .end((req, rep)=> {
        console.log("Inside rep");
      })
    }
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns
        }
        let newState = rootReducer(state, action);
        sprintBoard.findOneAndUpdate(state.id, {
          columns: newState.columns
        }, (err, data) => {
          console.log('this is what we recieved', data, err);
          if (err) {
            console.log('Error: ', err);
          }
        });
      }
    })
    socket.to(action.productId).emit('message', action);
  });
  // socket.on(ProfloAgileActionTypes.CARD_COMPLETED, (action) => {});
  // socket.on(ProfloAgileActionTypes.UPDATE_CARD, (action) => {});
  socket.on('@@proflo-types/ADD_COLUMN', (action) => {
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns
        }
        let newState = rootReducer(state, action);
        sprintBoard.findOneAndUpdate(state.id, {
          columns: newState.columns
        }, (err, data) => {
          console.log('this is what we recieved', data, err);
          if (err) {
            console.log('Error: ', err);
          }
        });
      }
    })
    socket.to(action.productId).emit('message', action);
  });
  socket.on('@@proflo-types/DELETE_COLUMN', (action) => {
    action.type = '@@proflo-types/DELETE_COLUMN'
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns
        }
        console.log('the payload is', action.payload);
        let newState = rootReducer(state, action);
        console.log('new state is :: ', newState);
        sprintBoard.findOneAndUpdate(state.id, {
          columns: newState.columns
        }, (err, data) => {
          console.log('this is what we recieved', data, err);
          if (err) {
            console.log('Error: ', err);
          }
        });
      }
    })
    socket.to(action.productId).emit('message', action)
  });
  socket.on('@@proflo-types/MOVE_COLUMN', (action) => {
    action.type = '@@proflo-types/MOVE_COLUMN'
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns
        }
        let newState = rootReducer(state, action);
        sprintBoard.findOneAndUpdate(state.id, {
          columns: newState.columns
        }, (err, data) => {
          console.log('this is what we recieved', data, err);
          if (err) {
            console.log('Error: ', err);
          }
        });
      }
    })
    socket.to(action.productId).emit('message', action)
  });
  socket.on(ProfloAgileActionTypes.EDIT_COLUMN_TITLE, (action) => {
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns
        }
        let newState = rootReducer(state, action);
        sprintBoard.findOneAndUpdate(state.id, {
          columns: newState.columns
        }, (err, data) => {
          console.log('this is what we recieved', data, err);
          if (err) {
            console.log('Error: ', err);
          }
        });
      }
    })
  });
  socket.on('@@proflo-types/FREEZE_BOARD', (action) => {
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns,
          status: board[0].status
        }
        let newState = rootReducer(state, action);
        sprintBoard.findOneAndUpdate(state.id, {
          status: newState.status
        }, (err, data) => {});
      }
    })
    socket.to(action.productId).emit('message', action)
  });

  socket.on('@@proflo-types/UNFREEZE_BOARD', (action) => {
    let sprintBoard = mongoose.model('SprintBoard', KanbanSchema, "sprintBoard")
    sprintBoard.find({ 'productId': action.productId }, function (err, board) {
      if (board.length !== 0) {
        let state: IBoardState = {
          id: board[0]._id,
          productId: board[0].productId,
          sprintId: board[0].sprintId,
          productName: board[0].productName,
          sprintName: board[0].sprintName,
          columns: board[0].columns,
          status: board[0].status
        }
        let newState = rootReducer(state, action);
        console.log(newState.status);
        sprintBoard.findOneAndUpdate(state.id, {
          status: 'live'
        }, (err, data) => {});
      }
    })
    socket.to(action.productId).emit('message', action)
  });
  socket.on('disconnect', () => {
    console.log("disconnected now")
    socket.disconnect(true);
  })
});
server.listen(port, () => {
  console.log(`server is running on port ${port}!`)
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
  mongoose.connection.on('open', () => {
    console.log('mongoose connected');
  })
  mongoose.connection.on('error', (err: any) => {
    console.log('error in mongoose connection: ', err)
  })
})