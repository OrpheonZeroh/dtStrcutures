const data = [
    [1, 'Jim', 'raspberry', 'blackberry', 'lingonberry'],
    [2, 'Tina', 'boysenberry', 'strawberry', ''],
    [3, 'Sarah', 'blueberry', '', '']
  ];
  
  function infoTransform(values) {
    return values.map(value => {
      // Destructure
      let [id, name, ...foods] = value;
  
      // Filter out empty strings
      foods = foods.filter(food => food !== '');
  
      // Set food and noFood properties
      let noFood = null;
      let food = null;
  
      if (foods.length === 1) {
        noFood = foods[0];
        food = foods[0];
      } else if (foods.length > 1) {
        noFood = foods[foods.length - 1];
        food = foods[0];
      }
  
      return {
        id,
        name,
        food,
        noFood
      };
    });
  }
  
  console.log(infoTransform(data));

let data = [1, ""]