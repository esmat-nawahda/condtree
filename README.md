# CondTree 🌳
A novel approach to managing complex conditional logic in JavaScript. This module provides an intuitive and structured way to handle nested conditions, enhancing code readability and maintainability. Ideal for scenarios with multiple intertwined conditionals.

Tired of feeling like you're traversing a dense forest 🌲🌲🌲 with your complicated, nested conditional statements in JavaScript? Fear no more! `condtree` is here to turn those tricky if-else labyrinths into a walk in the park. 🌞

## Description 📖

CondTree is a one-of-a-kind module to manage complex conditional logic in JavaScript in an intuitive, tree-like structure. It makes your code more readable 📚, maintainable 🛠️, and, most importantly, less likely to scare off other developers! 🙀

## Installation 🏗️

If you're ready to say goodbye to traditional if-else nightmares, install `condtree` with npm:

```bash
npm install condtree
```

## Usage 🚀
Here's how you can use condtree to simplify your life:

```javascript
import conditionTree from 'condtree';

let x: number = 15;

let result = conditionTree({
    condition: () => x > 10,
    value: () => console.log("x is so large, it might have its own gravitational field! 🪐"),
    children: [
        {
            condition: () => x > 5,
            value: () => console.log("x is pretty big, it could probably lift 🏋️"),
            children: [
                {
                    condition: () => x > 0,
                    value: () => console.log("x is small, but it's trying its best! 💪"),
                    children: []
                }
            ]
        }
    ]
});
```

In this example, if x is greater than 10, we'll let the world know about its impressive size. If x is not that enormous but still larger than 5, we acknowledge its medium size. And if x is not bigger than 10 or 5, but still manages to be more significant than 0, we cheer for its efforts.

## Contributing 🤝
Got an idea to make condtree even better? Fork the repo and add your genius to it, then submit a pull request. All contributions are heartily welcome! 😄

## License 📜
MIT

Adventure is out there! 🌍
Start making your conditional logic as fun as a tree-climbing adventure with condtree. Your fellow developers (and your future self) will thank you! 🌳🧗‍♀️🙏
