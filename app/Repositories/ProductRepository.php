<?php

namespace App\Repositories;

use App\Contracts\ProductRepositoryInterface;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProductRepository implements ProductRepositoryInterface {

    /**
     * List all products
     *
     * @return void
     */
    public function list (Request $request) : mixed
    {
        return Product::with('categories');
    }


    /**
     * Create a new product
     *
     * @param ProductRequest $request
     * @return Product
     */
    public function create (ProductRequest $request) : Product 
    {
        $product = Product::create($request->validated());
        $product->categories()->sync($request->category_id);

        return $product->refresh();
    }
    

    /**
     * Update current product
     *
     * @param ProductRequest $request
     * @param Product $product
     * @return Product
     */
    public function update(ProductRequest $request, Product $product) : Product
    {
        $product->update($request->validated());
        $product->categories()->sync($request->category_id);

        return $product->refresh();
    }


    /**
     * Find current product
     *
     * @param Product $product
     * @return Product
     */
    public function find(Product $product) : Product
    {
        return $product;
    }

    /**
     * Delete current product
     *
     * @param Product $product
     * @return Product
     */
    public function delete(Product $product) : Product
    {
        $product->delete();

        return $product;
    }
}