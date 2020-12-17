import mongoose from 'mongoose';
import request from 'supertest';
import faker from 'faker';
import app from '../loaders/app';
import { initMongo } from '../loaders/mongo';
import ProductModel, { Product } from '../models/product';

describe('[e2e] Test user route', () => {
  beforeAll(async () => {
    await initMongo('db_e2e_product');
  });

  afterEach(async () => {
    await ProductModel.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('product create', () => {
    it('should be able to create product', async () => {
      expect.hasAssertions();
      const payload: Partial<Product> = {
        name: faker.random.word(),
      };
      const response = await request(app).post('/product').send(payload);
      expect((response.body.data as Product)?.name).toStrictEqual(payload.name);
    });
  });
});