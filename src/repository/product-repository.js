import { BaseRepository } from "./base-repository.js";

export class ProductRepository extends BaseRepository {
  async getProducts() {
    try {
      return await super.getAll("products", [
        "id",
        "name",
        "price_in_cents",
        "size",
      ]);
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id) {
    try {
      return await super.getById("products", id, [
        "id",
        "name",
        "price_in_cents",
        "size",
      ]);
    } catch (error) {
      throw error;
    }
  }

  async createProduct(values) {
    try {
      return await super.createData("products", values, [
        "name",
        "price_in_cents",
        "size",
      ]);
    } catch (error) {
      throw error;
    }
  }

  async updateProductById(id, values) {
    try {
      return await super.updateById("products", id, values, [
        "name",
        "price_in_cents",
        "size",
      ]);
    } catch (error) {
      throw error;
    }
  }

  async deleteProductById(id) {
    try {
      return await super.deleteById("products", id);
    } catch (error) {
      throw error;
    }
  }
}
