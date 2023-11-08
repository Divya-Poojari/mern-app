const mongoose = require('mongoose');

async function mongoDB() {
  try {
    await mongoose.connect('mongodb+srv://gofood:divyaa@cluster0.cyrordk.mongodb.net/gofoodmern', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function(err,data) {
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function(err,catData){
            if(err) console.log(err);
            else{
               global.food_items = data;
               global.foodCategory = catData;
            }
        })
        
  })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

module.exports = mongoDB;












