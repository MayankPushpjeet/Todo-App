export function Todos({todos}){
     return <div>
            {todos.map(function(todo){
                // eslint-disable-next-line react/jsx-key
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={()=>{
                        fetch("http://localhost:4000/completed",{
                            method : "PUT",
                            body : JSON.stringify({id: todo._id }),
                            headers : {
                                "Content-type" : "application/json"
                            }
                        }).then(async function(res){
                            const json = await res.json();
                            alert("Marked Completed");
                        })
                    }}>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            })}
            </div>
}