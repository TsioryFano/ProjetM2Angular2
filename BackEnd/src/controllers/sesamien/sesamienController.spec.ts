// sesamienController.spec.ts
import { expect } from 'chai';
import request from 'supertest';
import { app } from '../../server'; // Assurez-vous que cela pointe vers votre instance de serveur express
import { SESAMIENS } from '../../mock/mock-sesamien-list';

describe('Sesamien Controller Tests', () => {
  describe('GET /api/sesamiens', () => {
    it('should fetch all sesamiens', async () => {
      const response = await request(app).get('/api/sesamiens');
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(SESAMIENS); // Assurez-vous que SESAMIENS est accessible ici
    });
  });

  describe('GET /api/sesamiens/:id', () => {
    it('should fetch a specific sesamien by id', async () => {
      const sesamien = SESAMIENS[0]; // Prenez le premier pour le test
      const response = await request(app).get(`/api/sesamiens/${sesamien.id}`);
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(sesamien);
    });
  });

  describe('PUT /api/sesamiens/:id', () => {
    it('should update an existing sesamien', async () => {
      const sesamien = SESAMIENS[0];
      const updatedData = { nom: 'Updated Nom', prenoms: 'Updated Prenoms' };
      const response = await request(app).put(`/api/sesamiens/${sesamien.id}`).send(updatedData);
      expect(response.status).to.equal(200);
      expect(response.body).to.include(updatedData);
    });
  });

  describe('GET /api/sesamiens/search', () => {
    it('should search sesamiens by name', async () => {
      const searchTerm = 'Emma'; // Remplacez par une valeur de test valide
      const response = await request(app).get(`/api/sesamiens/search?nom=${searchTerm}`);
      expect(response.status).to.equal(200);
      // Faites des assertions sur la base des sesamiens attendus qui correspondent au terme de recherche
    });
  });

  describe('POST /api/sesamiens', () => {
    it('should create a new sesamien', async () => {
      const newSesamien = {
        nom: 'New Nom',
        prenoms: 'New Prenoms',
        // Ajoutez tous les autres champs nécessaires
      };
      const response = await request(app).post('/api/sesamiens').send(newSesamien);
      expect(response.status).to.equal(201);
      expect(response.body).to.include(newSesamien);
    });
  });
});

