
import React, { useState } from 'react';

import TutorialSection from './TutorialSection';

function LiveCoding() {
  
  const sections = [
    {
      title: 'Introduction to Variables',
      content: 'Variables in Python can be thought of as containers for storing data values. For example, `x = 5` creates a variable named x and stores the value 5 in it.',
      initialCode: 'x = 5\nprint(x)',
    },
    {
      title: 'Introduction to Lists',
      content: 'Lists in Python are used to store multiple items in a single variable. Lists are created using square brackets. For example, `fruits = ["apple", "banana", "cherry"]`.',
      initialCode: 'fruits = ["apple", "banana", "cherry"]\nprint(fruits)',
    },
    {
      title: 'Introduction to Functions',
      content: 'Functions are a block of code that performs a specific task. Functions can be defined using the def keyword. For example, `def my_function():\n  print("Hello, World!")`.',
      initialCode: 'def my_function():\n  print("Hello, World!")\nmy_function()',
    },
    {
      title: 'Introduction to Conditions',
      content: 'Conditions in Python are used to perform different actions based on different conditions. For example, `if x > y:\n  print("x is greater than y")`.',
      initialCode: 'x = 10\ny = 5\nif x > y:\n  print("x is greater than y")',
    },
    {
      title: 'Introduction to Loops',
      content: 'Loops in Python are used to repeat a block of code as long as a certain condition is met. For example, `while x < 5:\n  print(x)\n  x += 1`.',
      initialCode: 'x = 0\nwhile x < 5:\n  print(x)\n  x += 1',
    },
    {
      title: 'Introduction to Strings',
      content: 'Strings in Python are used to store text. For example, `my_string = "Hello, World!"`.',
      initialCode: 'my_string = "Hello, World!"\nprint(my_string)',
    },
    {
      title: 'Introduction to Tuples',
      content: 'Tuples in Python are used to store multiple items in a single variable. Tuples are created using parentheses. For example, `my_tuple = ("apple", "banana", "cherry")`.',
      initialCode: 'my_tuple = ("apple", "banana", "cherry")\nprint(my_tuple)',
    },
    {
      title: 'Introduction to Dictionaries',
      content: 'Dictionaries in Python are used to store key-value pairs. For example, `my_dict = {"name": "John", "age": 30}`.',
      initialCode: 'my_dict = {"name": "John", "age": 30}\nprint(my_dict)',
    },
    {
      title: 'Introduction to Sets',
      content: 'Sets in Python are used to store multiple items in a single variable. Sets are created using curly brackets. For example, `my_set = {"apple", "banana", "cherry"}`.',
      initialCode: 'my_set = {"apple", "banana", "cherry"}\nprint(my_set)',
    },
    {
      title: 'Introduction to Booleans',
      content: 'Booleans in Python are used to represent true or false values. For example, `my_boolean = True`.',
      initialCode: 'my_boolean = True\nprint(my_boolean)',
    },
    {
      title: 'Introduction to Numbers',
      content: 'Numbers in Python can be integers or floats. For example,  `y = 3.14`.',
      initialCode: 'y = 3.14\nprint(x)\nprint(y)',
    },
    {
      title: 'Introduction to Operators',
      content: 'Operators in Python are used to perform mathematical operations. For example, `x = 5` or `y = 3.14`.',
      initialCode: 'x = 5\ny = 3.14\nprint(x + y)',
    },
    {
      title: 'Introduction to Comments',
      content: 'Comments in Python are used to explain code. For example, `# This is a comment`.',
      initialCode: '# This is a comment\nprint("Hello, World!")',
    },
   
  ];

  return (
    <div className="App" >
      <h1>Learn Python with Fun</h1>
      {sections.map((section, index) => (
        <TutorialSection key={index} section={section} />
      ))}
    </div>
  );
}



export default LiveCoding;
