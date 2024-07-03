import request from 'supertest';
import router from '../Routes/controller'; // Adjust the path according to your project structure

describe('Users API', () => {
  it('should create a new user', async () => {
    // Act


    const response = await request(router)
      .post('/getUsers')
      .send({ name: 'John Doe', email: 'john@example.com' });

    // Assert
    expect(response.statusCode).toEqual(201);
    expect(response.body.name).toEqual('John Doe');
    expect(response.body.email).toEqual('john@example.com');
  });

//   it('should get all users', async () => {
//     // Arrange: Mocking the users array
//     const mockUsers = [
//       { id: '1', name: 'John Doe', email: 'john@example.com' },
//       { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
//     ];

//     // Replace the original users array with the mocked one
//     jest.spyOn(require('../Routes/controller'), 'users').mockImplementation(() => mockUsers);

//     // Act
//     const response = await request(router).get('/getUsers');

//     // Assert
//     expect(response.statusCode).toEqual(200);
//     expect(response.body.length).toEqual(mockUsers.length);
//     expect(response.body[0].name).toEqual(mockUsers[0].name);
//     expect(response.body[0].email).toEqual(mockUsers[0].email);
//   });
});