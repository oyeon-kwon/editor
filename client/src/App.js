import './App.css';
import ReactQuill from 'react-quill'

function App() {
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline"],
      ],
    },
  };
  return (
    <div className="App">
      <ReactQuill
          style={{ width: "800px", height: "600px" }}
          modules={modules}
      />
    </div>
  );
}

export default App;
