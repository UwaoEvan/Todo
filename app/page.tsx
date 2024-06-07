import db from "@/utils/db"

const getTodos = async () => {
  return await db.todo.findMany({})
}

export default function Home() {
  const todos = getTodos();
  return <h1>Home</h1>
}
