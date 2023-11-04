// Dans votre fichier userController.spec.ts

import { app } from '../../server'; // Assurez-vous que cela pointe vers votre instance de serveur Express
import request from 'supertest';
import { expect } from 'chai';
import { mockUserList } from '../../mock/mock-user';

describe('User Controller Tests', () => {
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const newUser = {
        username: 'testUser',
        email: 'test@example.com',
        password: 'password123',
        roles: ['student'],
        tutorialGroupType: 'type1',
        teachingUnits: ['unit1', 'unit2'],
      };

      const res = await request(app)
        .post('/users')
        .send(newUser);

      expect(res.status).to.equal(201);
      expect(res.body).to.include({
        username: newUser.username,
        email: newUser.email,
        // autres assertions pour les champs retournés
      });
      expect(res.body).to.not.have.property('password'); // le mot de passe ne devrait pas être retourné
    });
  });

  describe('GET /users', () => {
    it('should get all users', async () => {
      const res = await request(app).get('/users');

      expect(res.status).to.equal(200);
      expect(res.body.users).to.be.an('array');
      expect(res.body.totalCount).to.equal(mockUserList.length);
    });
  });

  describe('GET /users/:id', () => {
    it('should get a user by id', async () => {
      const user = mockUserList[0];
      const res = await request(app).get(`/users/${user.userId}`);

      expect(res.status).to.equal(200);
      expect(res.body.userId).to.equal(user.userId);
    });

    it('should return a 404 if the user does not exist', async () => {
      const res = await request(app).get('/users/nonexistingid');
      expect(res.status).to.equal(404);
    });
  });
});
