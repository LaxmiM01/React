// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       const newUser = new User({ username, password });
//       console.log(newUser)
//       await newUser.save();
//       res.json( {message: 'User Created Successfully'});
      
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });