import request from 'supertest';
import { app } from '../../server';
import { SESAMIENS } from '../../mock/mock-sesamien-list';
import { expect } from 'chai';

// Remplacement pour "GET /api/sesamiens" - "should fetch all sesamiens"
const testFetchAllSesamiens = async () => {
    const res = await request(app).get('/api/sesamiens');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal(SESAMIENS);
};

// Remplacement pour "GET /api/sesamiens/:id" - "should fetch a specific sesamien by id"
const testFetchSpecificSesamienById = async () => {
    const sampleSesamien = SESAMIENS[0];
    const res = await request(app).get(`/api/sesamiens/${sampleSesamien.id}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal(sampleSesamien);
};

const testUpdateExistingSesamien = async () => {
    const sampleSesamien = { ...SESAMIENS[0], name: 'Updated Name' };
    const res = await request(app).put(`/api/sesamiens/${sampleSesamien.id}`).send(sampleSesamien);
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Updated Name');
};

// Remplacement pour "PUT /api/sesamiens/:id" - "should return 404 when updating a non-existing sesamien"
const testUpdateNonExistingSesamien = async () => {
    const res = await request(app).put('/api/sesamiens/invalid-id').send({});
    expect(res.status).to.equal(404);
};

// Remplacement pour "POST /api/sesamiens" - "should create a new sesamien and return it"
const testCreateNewSesamien = async () => {
    const newSesamien = { name: 'New Sesamien' };  // Assurez-vous d'ajouter tous les champs nécessaires
    const res = await request(app).post('/api/sesamiens').send(newSesamien);
    expect(res.status).to.equal(201);
    expect(res.body.name).to.equal(newSesamien.name);
    expect(res.body.id).to.have.lengthOf(8);  // Adaptez cela en fonction de la logique de votre générateur d'ID
};

// Remplacement pour "POST /api/sesamiens" - "should return 400 for invalid sesamien data"
const testCreateInvalidSesamien = async () => {
    const invalidSesamien = {};  // Données invalides
    const res = await request(app).post('/api/sesamiens').send(invalidSesamien);
    expect(res.status).to.equal(400);
};

// Exécutez vos tests
(async () => {
    try {
        await testFetchAllSesamiens();
        await testFetchSpecificSesamienById();
        await testUpdateExistingSesamien();
        await testUpdateNonExistingSesamien();
        await testCreateNewSesamien();
        await testCreateInvalidSesamien();
        
        console.log('Tous les tests ont réussi.');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Un test a échoué:', error.message);
        } else {
            console.error('Un test a échoué:', error);
        }
    }
})();