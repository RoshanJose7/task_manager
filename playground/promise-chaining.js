require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f5393ab04d9610a38993281").then((task)=>{
// 	console.log(task)
// 	return Task.countDocuments({
// 		isCompleted: false
// 	})
// }).then((result)=>{
// 	console.log(result)
// }).catch((error)=>{
// 	console.log(error)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ isCompleted: false });

  return count;
};

deleteTaskAndCount("5f53939804d9610a38993280")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
