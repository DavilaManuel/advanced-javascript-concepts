// Callback
function requestHandle(req, res) {
    User.findById(req.userId, function(err, user) {
        if(err) {
            res.send(err)
        } else {
            Tasks.findById(user.taskId, function(err, tasks) {
                if(err) {
                    return res.send(err)
                } else {
                    tasks.completed = true
                }
            })
        }
    })
}

// Promises
function requestHandler() {
    User.findId(req.userId)
        .then(function (user) {
            return res.send(user.tasksId)
        })
        .then(function(tasks) {
            tasks.completed = true
            return tasks.save()
        })
        .then(function() {
            res.send('Tareas completadas')
        })
        .catch(function (err) {
            res.send(err)
        })
}

// Async - await
async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId)
        const tasks = await Tasks.findById(user.tasksId)
        tasks.completed = true
        await tasks.save()
        res.send('Task completed')
        
    } catch (error) {
        console.log(error);
    }
}