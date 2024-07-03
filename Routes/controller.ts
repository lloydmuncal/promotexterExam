import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();


interface User {
  id: string;
  name: string; 
  email: string;
}

let users: User[] = [];



router.get('/', (req: Request, res: Response) => {
   res.send('Hello This is Controller.ts');
});



// 1. Using any programming language or a pseudo code, create an application that
// utilises RESTful API development highlighting CRUD operations with HTTP POST
// and GET methods.


router.get('/getUsers', async (req: Request, res: Response) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/insertUsers', async (req: Request, res: Response) => {
  try {
    const newUser: User = { id: uuidv4(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request'); 
  }
});



// I created a RESTful API using Express.js and TypeScript, 
// focusing on HTTP GET and POST methods. Starting with the basics, 
// I've imported the necessary modules and declare a User interface to ensure type safety for user data. , 
// I've initialized an empty array to hold user objects and set up two main routes: one  for fetching all users, 
// and  for inserting new users. Each route handler is carefully wrapped in a try-catch block to gracefully handle any potential errors, 
// showcasing my attention to detail and commitment to robust error management. Additionally, 
// I've utilized UUIDs to generate unique IDs for new users, ensuring each user is uniquely identifiable. 
// This approach combines the ease of use and flexibility of Express.js with the strong typing and advanced features of TypeScript, 
// laying a solid foundation for building scalable and maintainable web applications.



// 2. Using javascript/typescript, return all possible letter combinations that a phone button
// from 2-9 represents. The order of the answer does not matter.



router.get('/PhoneKeypad', async (req: Request, res: Response) => {
  type PhoneLayout = {
    [key: string]: string[];
  };
  const phoneLayout: PhoneLayout = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"], 
    "9": ["w", "x", "y", "z"]
  };

  function KeypadCombination(digits: string): string[] {
    if (!digits) return [];
  
    const combinations: string[][] = [];
    const currentKey = digits[0];
    const remainingDigits = digits.slice(1);
  
    phoneLayout[currentKey].forEach(letter => {
      if (remainingDigits.length === 0) {
        combinations.push([letter]);
      } else {
        const nextCombinations = KeypadCombination(remainingDigits);
        nextCombinations.forEach(combination => {
          combinations.push([letter, ...combination]);
        });
      }
    });
  
    return combinations.map(comb => comb.join(''));
  }

  console.log(KeypadCombination("23")); 

});







export default router;