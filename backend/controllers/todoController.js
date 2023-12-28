exports.posttodos=async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
      console.log("hi")
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
   exports.addtodos= async (req, res) => {
    const { text, completed } = req.body;
  
    try {
      const todo = new Todo({ text, completed });
      await todo.save();
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  exports.gettodos= async (req, res) => {
    const { text, completed } = req.body;
    try {
      const todo = new Todo({ text, completed });
      await todo.save();
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //Update a todo
  exports.edittodos = async (req, res) => {
    const { id } = req.params;
    // const { text, completed } = req.body;
  
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
      res.json(updatedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //Delete a todo
 exports.deletetodos = async (req, res) => {
    console.log("req.params",req.params)
    const { id } = req.params;
  
    try {
      await Todo.findByIdAndDelete(id);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }