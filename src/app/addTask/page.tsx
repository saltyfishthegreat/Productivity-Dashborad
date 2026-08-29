const indexTerm = ['Title', 'Description','Due Date','Priority','Assignee'];
export default function App() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <input type="text" placeholder="Title" />
        </div>
        <div>
            {indexTerm.map(term => (
                <div key={term}>
                    <p>{term}:</p>
                    <input type="text" placeholder={term} />
                </div>
            ))}
        </div>
        <div>
            <button type="submit">Add Task</button>
        </div>
    </div>
  );
}