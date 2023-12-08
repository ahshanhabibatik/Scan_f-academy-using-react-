1. 
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

# Answer:
  Answer B: ReferenceError: greetign is not defined.

  Explanation:
  In the code, there is a typo in the variable name. It is declared as greeting, but it is assigned to greetign. JavaScript is case-sensitive, so greetign is treated as a separate and undefined variable. When you try to log it, you'll get a ReferenceError because greetign is not defined.


# 2.
 function sum(a, b) {
  return a + b;
 }

 sum(1, "2");
 A: NaN
 B: TypeError
 C: "12"
 D: 3

# Answer    

Answer: D: 3.

Explanation:
In JavaScript, when you use the + operator with a string and a number, JavaScript will attempt to perform type coercion and convert the number to a string or vice versa to perform the concatenation operation. In this case, "2" is a string, but it can be converted to a number for addition. So, the "2" is converted to a number, and the addition operation results in 1 + 2, which equals 3.

# 3.
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
# Answer

Answer:  A: ['🍕', '🍫', '🥑', '🍔'].

Explanation:
In the code, info.favoriteFood is initially set to a reference of the first element of the food array, which is "🍕". When you later change info.favoriteFood to "🍝", it only modifies the info object, not the food array. Therefore, food remains unchanged, and its elements are still ["🍕", "🍫", "🥑", "🍔"].

# 4.
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

# Answer:
 
Answer: B: Hi there, undefined.

Explanation:
In the code, the sayHi function expects a name parameter, but when you call sayHi() without passing an argument, name becomes undefined within the function. Therefore, the function returns "Hi there, undefined" when you log the result.

# 5.

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

# Answer:

Answer: B 

Explanation:
In the code, the forEach method iterates through each element in the nums array. The if (num) condition checks if the current num is truthy (not equal to 0), and if it is, it increments the count variable by 1.


# Scanf Academy

Welcome to Scanf Academy - Your Gateway to Learning!

## Overview

Scanf Academy is an online platform dedicated to providing high-quality educational content and courses service on a wide range of topics. Whether you're a beginner looking to acquire new skills or an expert seeking to deepen your knowledge, Scanf Academy has something for everyone.

## Live Site

Visit the live site: [Scanf Academy](https://scanf-academy.web.app/login)

## Features and Functionalities

- **Authentication and User Management:**:
 1.The application supports user authentication, allowing users to create accounts, log in, and log out.
 2.User authentication is handled using Firebase Authentication with providers like Google and GitHub.
 3.User information is displayed, including profile pictures, and users can log out from the application.

- **Navigation:**: 
The navigation bar provides links to various parts of the application, including courses, FAQ, blog, and reviews.
Navigation is responsive, with a hamburger menu for smaller screens.

- **Course Catalog:**: 
Users can browse and view a catalog of available courses.
Course details, including titles, images, descriptions, trainers, ratings, and enrollment statistics, are displayed.

- **Course Details:**: 
Users can click on a course to view more details, including course content, duration, total lectures, quiz availability, and assignment details.
Premium access to courses is available.

- **Course Details:**: 

The application uses AOS (Animate On Scroll) library for animations.

- **User-Friendly Interface**: Enjoy a clean and intuitive user interface designed for an exceptional learning experience.It is responsive for every device.

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript, React.js
- Version Control: Git/GitHub

## Getting Started

To run Scanf Academy locally for development purposes, follow these steps:

1. Clone the repository: `git clone https://github.com/programming-hero-web-course-4/b8a9-event-management-ahshanhabibatik`
2. Navigate to the project directory: `cd scanfacademy`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Contributing

We welcome contributions from the community to make Scanf Academy even better. If you'd like to contribute, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Us

If you have any questions, suggestions, or feedback, please don't hesitate to contact us at [contact@scanfacademy.com](mailto:contact@scanfacademy.com).

Happy learning!
