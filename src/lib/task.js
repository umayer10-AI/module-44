import tasks from "../data/data.json"

export const getTask = async () => {
    return tasks
}

export const postTask = async (newTask) => {
    newTask.id = tasks.tasks.length + 1
    tasks.tasks.unshift(newTask)
    return {ok: true, messege: "Task Added Successfully"}
}